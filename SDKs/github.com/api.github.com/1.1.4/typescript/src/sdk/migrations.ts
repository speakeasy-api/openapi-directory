import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Migrations {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * migrationsCancelImport - Cancel an import
   *
   * Stop an import for a repository.
   *
   * https://docs.github.com/rest/reference/migrations#cancel-an-import - API method documentation
  **/
  migrationsCancelImport(
    req: operations.MigrationsCancelImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsCancelImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsCancelImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsCancelImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsDeleteArchiveForAuthenticatedUser - Delete a user migration archive
   *
   * Deletes a previous migration archive. Downloadable migration archives are automatically deleted after seven days. Migration metadata, which is returned in the [List user migrations](https://docs.github.com/rest/reference/migrations#list-user-migrations) and [Get a user migration status](https://docs.github.com/rest/reference/migrations#get-a-user-migration-status) endpoints, will continue to be available even after an archive is deleted.
   *
   * https://docs.github.com/rest/reference/migrations#delete-a-user-migration-archive - API method documentation
  **/
  migrationsDeleteArchiveForAuthenticatedUser(
    req: operations.MigrationsDeleteArchiveForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsDeleteArchiveForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsDeleteArchiveForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/user/migrations/{migration_id}/archive", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsDeleteArchiveForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsDeleteArchiveForOrg - Delete an organization migration archive
   *
   * Deletes a previous migration archive. Migration archives are automatically deleted after seven days.
   *
   * https://docs.github.com/rest/reference/migrations#delete-an-organization-migration-archive - API method documentation
  **/
  migrationsDeleteArchiveForOrg(
    req: operations.MigrationsDeleteArchiveForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsDeleteArchiveForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsDeleteArchiveForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations/{migration_id}/archive", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsDeleteArchiveForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsDownloadArchiveForOrg - Download an organization migration archive
   *
   * Fetches the URL to a migration archive.
   *
   * https://docs.github.com/rest/reference/migrations#download-an-organization-migration-archive - API method documentation
  **/
  migrationsDownloadArchiveForOrg(
    req: operations.MigrationsDownloadArchiveForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsDownloadArchiveForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsDownloadArchiveForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations/{migration_id}/archive", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsDownloadArchiveForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsGetArchiveForAuthenticatedUser - Download a user migration archive
   *
   * Fetches the URL to download the migration archive as a `tar.gz` file. Depending on the resources your repository uses, the migration archive can contain JSON files with data for these objects:
   * 
   * *   attachments
   * *   bases
   * *   commit\_comments
   * *   issue\_comments
   * *   issue\_events
   * *   issues
   * *   milestones
   * *   organizations
   * *   projects
   * *   protected\_branches
   * *   pull\_request\_reviews
   * *   pull\_requests
   * *   releases
   * *   repositories
   * *   review\_comments
   * *   schema
   * *   users
   * 
   * The archive will also contain an `attachments` directory that includes all attachment files uploaded to GitHub.com and a `repositories` directory that contains the repository's Git data.
   *
   * https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive - API method documentation
  **/
  migrationsGetArchiveForAuthenticatedUser(
    req: operations.MigrationsGetArchiveForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsGetArchiveForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsGetArchiveForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/user/migrations/{migration_id}/archive", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsGetArchiveForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 302:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsGetCommitAuthors - Get commit authors
   *
   * Each type of source control system represents authors in a different way. For example, a Git commit author has a display name and an email address, but a Subversion commit author just has a username. The GitHub Importer will make the author information valid, but the author might not be correct. For example, it will change the bare Subversion username `hubot` into something like `hubot <hubot@12341234-abab-fefe-8787-fedcba987654>`.
   * 
   * This endpoint and the [Map a commit author](https://docs.github.com/rest/reference/migrations#map-a-commit-author) endpoint allow you to provide correct Git author information.
   *
   * https://docs.github.com/rest/reference/migrations#get-commit-authors - API method documentation
  **/
  migrationsGetCommitAuthors(
    req: operations.MigrationsGetCommitAuthorsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsGetCommitAuthorsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsGetCommitAuthorsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import/authors", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsGetCommitAuthorsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.porterAuthors = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsGetImportStatus - Get an import status
   *
   * View the progress of an import.
   * 
   * **Import status**
   * 
   * This section includes details about the possible values of the `status` field of the Import Progress response.
   * 
   * An import that does not have errors will progress through these steps:
   * 
   * *   `detecting` - the "detection" step of the import is in progress because the request did not include a `vcs` parameter. The import is identifying the type of source control present at the URL.
   * *   `importing` - the "raw" step of the import is in progress. This is where commit data is fetched from the original repository. The import progress response will include `commit_count` (the total number of raw commits that will be imported) and `percent` (0 - 100, the current progress through the import).
   * *   `mapping` - the "rewrite" step of the import is in progress. This is where SVN branches are converted to Git branches, and where author updates are applied. The import progress response does not include progress information.
   * *   `pushing` - the "push" step of the import is in progress. This is where the importer updates the repository on GitHub. The import progress response will include `push_percent`, which is the percent value reported by `git push` when it is "Writing objects".
   * *   `complete` - the import is complete, and the repository is ready on GitHub.
   * 
   * If there are problems, you will see one of these in the `status` field:
   * 
   * *   `auth_failed` - the import requires authentication in order to connect to the original repository. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
   * *   `error` - the import encountered an error. The import progress response will include the `failed_step` and an error message. Contact [GitHub Support](https://support.github.com/contact) or [GitHub Premium Support](https://premium.githubsupport.com) for more information.
   * *   `detection_needs_auth` - the importer requires authentication for the originating repository to continue detection. To update authentication for the import, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
   * *   `detection_found_nothing` - the importer didn't recognize any source control at the URL. To resolve, [Cancel the import](https://docs.github.com/rest/reference/migrations#cancel-an-import) and [retry](https://docs.github.com/rest/reference/migrations#start-an-import) with the correct URL.
   * *   `detection_found_multiple` - the importer found several projects or repositories at the provided URL. When this is the case, the Import Progress response will also include a `project_choices` field with the possible project choices as values. To update project choice, please see the [Update an import](https://docs.github.com/rest/reference/migrations#update-an-import) section.
   * 
   * **The project_choices field**
   * 
   * When multiple projects are found at the provided URL, the response hash will include a `project_choices` field, the value of which is an array of hashes each representing a project choice. The exact key/value pairs of the project hashes will differ depending on the version control type.
   * 
   * **Git LFS related fields**
   * 
   * This section includes details about Git LFS related fields that may be present in the Import Progress response.
   * 
   * *   `use_lfs` - describes whether the import has been opted in or out of using Git LFS. The value can be `opt_in`, `opt_out`, or `undecided` if no action has been taken.
   * *   `has_large_files` - the boolean value describing whether files larger than 100MB were found during the `importing` step.
   * *   `large_files_size` - the total size in gigabytes of files larger than 100MB found in the originating repository.
   * *   `large_files_count` - the total number of files larger than 100MB found in the originating repository. To see a list of these files, make a "Get Large Files" request.
   *
   * https://docs.github.com/rest/reference/migrations#get-an-import-status - API method documentation
  **/
  migrationsGetImportStatus(
    req: operations.MigrationsGetImportStatusRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsGetImportStatusResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsGetImportStatusRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsGetImportStatusResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.import = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsGetLargeFiles - Get large files
   *
   * List files larger than 100MB found during the import
   *
   * https://docs.github.com/rest/reference/migrations#get-large-files - API method documentation
  **/
  migrationsGetLargeFiles(
    req: operations.MigrationsGetLargeFilesRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsGetLargeFilesResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsGetLargeFilesRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import/large_files", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsGetLargeFilesResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.porterLargeFiles = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsGetStatusForAuthenticatedUser - Get a user migration status
   *
   * Fetches a single user migration. The response includes the `state` of the migration, which can be one of the following values:
   * 
   * *   `pending` - the migration hasn't started yet.
   * *   `exporting` - the migration is in progress.
   * *   `exported` - the migration finished successfully.
   * *   `failed` - the migration failed.
   * 
   * Once the migration has been `exported` you can [download the migration archive](https://docs.github.com/rest/reference/migrations#download-a-user-migration-archive).
   *
   * https://docs.github.com/rest/reference/migrations#get-a-user-migration-status - API method documentation
  **/
  migrationsGetStatusForAuthenticatedUser(
    req: operations.MigrationsGetStatusForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsGetStatusForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsGetStatusForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/user/migrations/{migration_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsGetStatusForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migration = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsGetStatusForOrg - Get an organization migration status
   *
   * Fetches the status of a migration.
   * 
   * The `state` of a migration can be one of the following values:
   * 
   * *   `pending`, which means the migration hasn't started yet.
   * *   `exporting`, which means the migration is in progress.
   * *   `exported`, which means the migration finished successfully.
   * *   `failed`, which means the migration failed.
   *
   * https://docs.github.com/rest/reference/migrations#get-an-organization-migration-status - API method documentation
  **/
  migrationsGetStatusForOrg(
    req: operations.MigrationsGetStatusForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsGetStatusForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsGetStatusForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations/{migration_id}", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsGetStatusForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migration = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsListForAuthenticatedUser - List user migrations
   *
   * Lists all migrations a user has started.
   *
   * https://docs.github.com/rest/reference/migrations#list-user-migrations - API method documentation
  **/
  migrationsListForAuthenticatedUser(
    req: operations.MigrationsListForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsListForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsListForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/migrations";
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsListForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migrations = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsListForOrg - List organization migrations
   *
   * Lists the most recent migrations.
   *
   * https://docs.github.com/rest/reference/migrations#list-organization-migrations - API method documentation
  **/
  migrationsListForOrg(
    req: operations.MigrationsListForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsListForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsListForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsListForOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migrations = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsListReposForOrg - List repositories in an organization migration
   *
   * List all the repositories for this organization migration.
   *
   * https://docs.github.com/rest/reference/migrations#list-repositories-in-an-organization-migration - API method documentation
  **/
  migrationsListReposForOrg(
    req: operations.MigrationsListReposForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsListReposForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsListReposForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations/{migration_id}/repositories", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsListReposForOrgResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsListReposForUser - List repositories for a user migration
   *
   * Lists all the repositories for this user migration.
   *
   * https://docs.github.com/rest/reference/migrations#list-repositories-for-a-user-migration - API method documentation
  **/
  migrationsListReposForUser(
    req: operations.MigrationsListReposForUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsListReposForUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsListReposForUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/user/migrations/{migration_id}/repositories", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsListReposForUserResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.minimalRepositories = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsMapCommitAuthor - Map a commit author
   *
   * Update an author's identity for the import. Your application can continue updating authors any time before you push new commits to the repository.
   *
   * https://docs.github.com/rest/reference/migrations#map-a-commit-author - API method documentation
  **/
  migrationsMapCommitAuthor(
    req: operations.MigrationsMapCommitAuthorRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsMapCommitAuthorResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsMapCommitAuthorRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import/authors/{author_id}", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsMapCommitAuthorResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.porterAuthor = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsSetLfsPreference - Update Git LFS preference
   *
   * You can import repositories from Subversion, Mercurial, and TFS that include files larger than 100MB. This ability is powered by [Git LFS](https://git-lfs.github.com). You can learn more about our LFS feature and working with large files [on our help site](https://help.github.com/articles/versioning-large-files/).
   *
   * https://docs.github.com/rest/reference/migrations#update-git-lfs-preference - API method documentation
  **/
  migrationsSetLfsPreference(
    req: operations.MigrationsSetLfsPreferenceRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsSetLfsPreferenceResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsSetLfsPreferenceRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import/lfs", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsSetLfsPreferenceResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.import = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsStartForAuthenticatedUser - Start a user migration
   *
   * Initiates the generation of a user migration archive.
   *
   * https://docs.github.com/rest/reference/migrations#start-a-user-migration - API method documentation
  **/
  migrationsStartForAuthenticatedUser(
    req: operations.MigrationsStartForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsStartForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsStartForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/user/migrations";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsStartForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migration = httpRes?.data;
            }
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsStartForOrg - Start an organization migration
   *
   * Initiates the generation of a migration archive.
   *
   * https://docs.github.com/rest/reference/migrations#start-an-organization-migration - API method documentation
  **/
  migrationsStartForOrg(
    req: operations.MigrationsStartForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsStartForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsStartForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsStartForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.migration = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsStartImport - Start an import
   *
   * Start a source import to a GitHub repository using GitHub Importer.
   *
   * https://docs.github.com/rest/reference/migrations#start-an-import - API method documentation
  **/
  migrationsStartImport(
    req: operations.MigrationsStartImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsStartImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsStartImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "put",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsStartImportResponse = {statusCode: httpRes.status, contentType: contentType, headers: utils.getHeadersFromResponse(httpRes.headers)};
        switch (true) {
          case httpRes?.status == 201:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.import = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 422:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.validationError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsUnlockRepoForAuthenticatedUser - Unlock a user repository
   *
   * Unlocks a repository. You can lock repositories when you [start a user migration](https://docs.github.com/rest/reference/migrations#start-a-user-migration). Once the migration is complete you can unlock each repository to begin using it again or [delete the repository](https://docs.github.com/rest/reference/repos#delete-a-repository) if you no longer need the source data. Returns a status of `404 Not Found` if the repository is not locked.
   *
   * https://docs.github.com/rest/reference/migrations#unlock-a-user-repository - API method documentation
  **/
  migrationsUnlockRepoForAuthenticatedUser(
    req: operations.MigrationsUnlockRepoForAuthenticatedUserRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsUnlockRepoForAuthenticatedUserResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsUnlockRepoForAuthenticatedUserRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/user/migrations/{migration_id}/repos/{repo_name}/lock", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsUnlockRepoForAuthenticatedUserResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 304:
            break;
          case httpRes?.status == 401:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 403:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsUnlockRepoForOrg - Unlock an organization repository
   *
   * Unlocks a repository that was locked for migration. You should unlock each migrated repository and [delete them](https://docs.github.com/rest/reference/repos#delete-a-repository) when the migration is complete and you no longer need the source data.
   *
   * https://docs.github.com/rest/reference/migrations#unlock-an-organization-repository - API method documentation
  **/
  migrationsUnlockRepoForOrg(
    req: operations.MigrationsUnlockRepoForOrgRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsUnlockRepoForOrgResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsUnlockRepoForOrgRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/orgs/{org}/migrations/{migration_id}/repos/{repo_name}/lock", req.pathParams);
    
    const client: AxiosInstance = this._defaultClient!;
    
    const r = client.request({
      url: url,
      method: "delete",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsUnlockRepoForOrgResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 204:
            break;
          case httpRes?.status == 404:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.basicError = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

  
  /**
   * migrationsUpdateImport - Update an import
   *
   * An import can be updated with credentials or a project choice by passing in the appropriate parameters in this API
   * request. If no parameters are provided, the import will be restarted.
   *
   * https://docs.github.com/rest/reference/migrations#update-an-import - API method documentation
  **/
  migrationsUpdateImport(
    req: operations.MigrationsUpdateImportRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.MigrationsUpdateImportResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.MigrationsUpdateImportRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/repos/{owner}/{repo}/import", req.pathParams);

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._defaultClient!;
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "patch",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.MigrationsUpdateImportResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.import = httpRes?.data;
            }
            break;
        }

        return res;
      })
  }

}
