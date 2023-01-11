import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Migrations:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def migrations_cancel_import(self, request: operations.MigrationsCancelImportRequest) -> operations.MigrationsCancelImportResponse:
        r"""Cancel an import
        Stop an import for a repository.
        https://docs.github.com/rest/reference/migrations#cancel-an-import - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsCancelImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def migrations_delete_archive_for_authenticated_user(self, request: operations.MigrationsDeleteArchiveForAuthenticatedUserRequest) -> operations.MigrationsDeleteArchiveForAuthenticatedUserResponse:
        r"""Delete a user migration archive
        Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/reference/migrations#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
        https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/migrations/{migration_id}/archive", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsDeleteArchiveForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_delete_archive_for_org(self, request: operations.MigrationsDeleteArchiveForOrgRequest) -> operations.MigrationsDeleteArchiveForOrgResponse:
        r"""Delete an organization migration archive
        Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
        https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations/{migration_id}/archive", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsDeleteArchiveForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_download_archive_for_org(self, request: operations.MigrationsDownloadArchiveForOrgRequest) -> operations.MigrationsDownloadArchiveForOrgResponse:
        r"""Download an organization migration archive
        Fetches the URL to a migration archive.
        https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations/{migration_id}/archive", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsDownloadArchiveForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_get_archive_for_authenticated_user(self, request: operations.MigrationsGetArchiveForAuthenticatedUserRequest) -> operations.MigrationsGetArchiveForAuthenticatedUserResponse:
        r"""Download a user migration archive
        Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
        
        *   attachments
        *   bases
        *   commit\_comments
        *   issue\_comments
        *   issue\_events
        *   issues
        *   milestones
        *   organizations
        *   projects
        *   protected\_branches
        *   pull\_request\_reviews
        *   pull\_requests
        *   releases
        *   repositories
        *   review\_comments
        *   schema
        *   users
        
        The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
        https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/migrations/{migration_id}/archive", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsGetArchiveForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 302:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_get_commit_authors(self, request: operations.MigrationsGetCommitAuthorsRequest) -> operations.MigrationsGetCommitAuthorsResponse:
        r"""Get commit authors
        Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
        
        This endpoint and the [Map a commit author](https://docs.github.com/rest/reference/migrations#map-a-commit-author) endpoint allow you to provide correct Git author information.
        https://docs.github.com/rest/reference/migrations#get-commit-authors - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import/authors", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsGetCommitAuthorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PorterAuthor]])
                res.porter_authors = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_get_import_status(self, request: operations.MigrationsGetImportStatusRequest) -> operations.MigrationsGetImportStatusResponse:
        r"""Get an import status
        View the progress of an import.
        
        **Import status**
        
        This section includes details about the possible values of the `status` field of the Import Progress response.
        
        An import that does not have errors will progress through these steps:
        
        *   `detecting` - the \"detection\" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
        *   `importing` - the \"raw\" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
        *   `mapping` - the \"rewrite\" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
        *   `pushing` - the \"push\" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is \"Writing objects\".
        *   `complete` - the import is complete, and the repository is ready on GitHub.
        
        If there are problems, you will see one of these in the `status` field:
        
        *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
        *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
        *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
        *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/reference/migrations#cancel-an-import) and [retry](https://docs.github.com/rest/reference/migrations#start-an-import) with the correct URL.
        *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
        
        **The project_choices field**
        
        When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
        
        **Git LFS related fields**
        
        This section includes details about Git LFS related fields that may be present in the Import Progress response.
        
        *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
        *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
        *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
        *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a \"Get Large Files\" request.
        https://docs.github.com/rest/reference/migrations#get-an-import-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsGetImportStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Import])
                res.import_ = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_get_large_files(self, request: operations.MigrationsGetLargeFilesRequest) -> operations.MigrationsGetLargeFilesResponse:
        r"""Get large files
        List files larger than 100MB found during the import
        https://docs.github.com/rest/reference/migrations#get-large-files - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import/large_files", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsGetLargeFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PorterLargeFile]])
                res.porter_large_files = out

        return res

    
    def migrations_get_status_for_authenticated_user(self, request: operations.MigrationsGetStatusForAuthenticatedUserRequest) -> operations.MigrationsGetStatusForAuthenticatedUserResponse:
        r"""Get a user migration status
        Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
        
        *   `pending` - the migration hasn't started yet.
        *   `exporting` - the migration is in progress.
        *   `exported` - the migration finished successfully.
        *   `failed` - the migration failed.
        
        Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).
        https://docs.github.com/rest/reference/migrations#get-a-user-migration-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/migrations/{migration_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsGetStatusForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Migration])
                res.migration = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_get_status_for_org(self, request: operations.MigrationsGetStatusForOrgRequest) -> operations.MigrationsGetStatusForOrgResponse:
        r"""Get an organization migration status
        Fetches the status of a migration.
        
        The `state` of a migration can be one of the following values:
        
        *   `pending`, which means the migration hasn't started yet.
        *   `exporting`, which means the migration is in progress.
        *   `exported`, which means the migration finished successfully.
        *   `failed`, which means the migration failed.
        https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations/{migration_id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsGetStatusForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Migration])
                res.migration = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_list_for_authenticated_user(self, request: operations.MigrationsListForAuthenticatedUserRequest) -> operations.MigrationsListForAuthenticatedUserResponse:
        r"""List user migrations
        Lists all migrations a user has started.
        https://docs.github.com/rest/reference/migrations#list-user-migrations - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/migrations"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsListForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Migration]])
                res.migrations = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_list_for_org(self, request: operations.MigrationsListForOrgRequest) -> operations.MigrationsListForOrgResponse:
        r"""List organization migrations
        Lists the most recent migrations.
        https://docs.github.com/rest/reference/migrations#list-organization-migrations - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsListForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Migration]])
                res.migrations = out

        return res

    
    def migrations_list_repos_for_org(self, request: operations.MigrationsListReposForOrgRequest) -> operations.MigrationsListReposForOrgResponse:
        r"""List repositories in an organization migration
        List all the repositories for this organization migration.
        https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations/{migration_id}/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsListReposForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.MinimalRepository]])
                res.minimal_repositories = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_list_repos_for_user(self, request: operations.MigrationsListReposForUserRequest) -> operations.MigrationsListReposForUserResponse:
        r"""List repositories for a user migration
        Lists all the repositories for this user migration.
        https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/migrations/{migration_id}/repositories", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsListReposForUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.MinimalRepository]])
                res.minimal_repositories = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_map_commit_author(self, request: operations.MigrationsMapCommitAuthorRequest) -> operations.MigrationsMapCommitAuthorResponse:
        r"""Map a commit author
        Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
        https://docs.github.com/rest/reference/migrations#map-a-commit-author - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import/authors/{author_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsMapCommitAuthorResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PorterAuthor])
                res.porter_author = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def migrations_set_lfs_preference(self, request: operations.MigrationsSetLfsPreferenceRequest) -> operations.MigrationsSetLfsPreferenceResponse:
        r"""Update Git LFS preference
        You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
        https://docs.github.com/rest/reference/migrations#update-git-lfs-preference - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import/lfs", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsSetLfsPreferenceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Import])
                res.import_ = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def migrations_start_for_authenticated_user(self, request: operations.MigrationsStartForAuthenticatedUserRequest) -> operations.MigrationsStartForAuthenticatedUserResponse:
        r"""Start a user migration
        Initiates the generation of a user migration archive.
        https://docs.github.com/rest/reference/migrations#start-a-user-migration - API method documentation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/user/migrations"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsStartForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Migration])
                res.migration = out
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def migrations_start_for_org(self, request: operations.MigrationsStartForOrgRequest) -> operations.MigrationsStartForOrgResponse:
        r"""Start an organization migration
        Initiates the generation of a migration archive.
        https://docs.github.com/rest/reference/migrations#start-an-organization-migration - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsStartForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Migration])
                res.migration = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def migrations_start_import(self, request: operations.MigrationsStartImportRequest) -> operations.MigrationsStartImportResponse:
        r"""Start an import
        Start a source import to a GitHub repository using GitHub Importer.
        https://docs.github.com/rest/reference/migrations#start-an-import - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsStartImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Import])
                res.import_ = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 422:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValidationError])
                res.validation_error = out

        return res

    
    def migrations_unlock_repo_for_authenticated_user(self, request: operations.MigrationsUnlockRepoForAuthenticatedUserRequest) -> operations.MigrationsUnlockRepoForAuthenticatedUserResponse:
        r"""Unlock a user repository
        Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
        https://docs.github.com/rest/reference/migrations#unlock-a-user-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/user/migrations/{migration_id}/repos/{repo_name}/lock", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsUnlockRepoForAuthenticatedUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 304:
            pass
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_unlock_repo_for_org(self, request: operations.MigrationsUnlockRepoForOrgRequest) -> operations.MigrationsUnlockRepoForOrgResponse:
        r"""Unlock an organization repository
        Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
        https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsUnlockRepoForOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BasicError])
                res.basic_error = out

        return res

    
    def migrations_update_import(self, request: operations.MigrationsUpdateImportRequest) -> operations.MigrationsUpdateImportResponse:
        r"""Update an import
        An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
        request. If no parameters are provided, the import will be restarted.
        https://docs.github.com/rest/reference/migrations#update-an-import - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/repos/{owner}/{repo}/import", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MigrationsUpdateImportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Import])
                res.import_ = out

        return res

    