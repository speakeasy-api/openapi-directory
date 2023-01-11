import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Billing:
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

    
    def billing_get_github_actions_billing_ghe(self, request: operations.BillingGetGithubActionsBillingGheRequest) -> operations.BillingGetGithubActionsBillingGheResponse:
        r"""Get GitHub Actions billing for an enterprise
        Gets the summary of the free and paid GitHub Actions minutes used.
        
        Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage does not include the multiplier for macOS and Windows runners and is not rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".
        
        The authenticated user must be an enterprise admin.
        https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/settings/billing/actions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetGithubActionsBillingGheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsBillingUsage])
                res.actions_billing_usage = out

        return res

    
    def billing_get_github_actions_billing_org(self, request: operations.BillingGetGithubActionsBillingOrgRequest) -> operations.BillingGetGithubActionsBillingOrgResponse:
        r"""Get GitHub Actions billing for an organization
        Gets the summary of the free and paid GitHub Actions minutes used.
        
        Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".
        
        Access tokens must have the `repo` or `admin:org` scope.
        https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/settings/billing/actions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetGithubActionsBillingOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsBillingUsage])
                res.actions_billing_usage = out

        return res

    
    def billing_get_github_actions_billing_user(self, request: operations.BillingGetGithubActionsBillingUserRequest) -> operations.BillingGetGithubActionsBillingUserResponse:
        r"""Get GitHub Actions billing for a user
        Gets the summary of the free and paid GitHub Actions minutes used.
        
        Paid minutes only apply to workflows in private repositories that use GitHub-hosted runners. Minutes used is listed for each GitHub-hosted runner operating system. Any job re-runs are also included in the usage. The usage returned includes any minute multipliers for macOS and Windows runners, and is rounded up to the nearest whole minute. For more information, see \"[Managing billing for GitHub Actions](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-actions)\".
        
        Access tokens must have the `user` scope.
        https://docs.github.com/rest/reference/billing/#get-github-actions-billing-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/settings/billing/actions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetGithubActionsBillingUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ActionsBillingUsage])
                res.actions_billing_usage = out

        return res

    
    def billing_get_github_packages_billing_ghe(self, request: operations.BillingGetGithubPackagesBillingGheRequest) -> operations.BillingGetGithubPackagesBillingGheResponse:
        r"""Get GitHub Packages billing for an enterprise
        Gets the free and paid storage used for GitHub Packages in gigabytes.
        
        Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"
        
        The authenticated user must be an enterprise admin.
        https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/settings/billing/packages", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetGithubPackagesBillingGheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackagesBillingUsage])
                res.packages_billing_usage = out

        return res

    
    def billing_get_github_packages_billing_org(self, request: operations.BillingGetGithubPackagesBillingOrgRequest) -> operations.BillingGetGithubPackagesBillingOrgResponse:
        r"""Get GitHub Packages billing for an organization
        Gets the free and paid storage usued for GitHub Packages in gigabytes.
        
        Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"
        
        Access tokens must have the `repo` or `admin:org` scope.
        https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/settings/billing/packages", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetGithubPackagesBillingOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackagesBillingUsage])
                res.packages_billing_usage = out

        return res

    
    def billing_get_github_packages_billing_user(self, request: operations.BillingGetGithubPackagesBillingUserRequest) -> operations.BillingGetGithubPackagesBillingUserResponse:
        r"""Get GitHub Packages billing for a user
        Gets the free and paid storage used for GitHub Packages in gigabytes.
        
        Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"
        
        Access tokens must have the `user` scope.
        https://docs.github.com/rest/reference/billing/#get-github-packages-billing-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/settings/billing/packages", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetGithubPackagesBillingUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PackagesBillingUsage])
                res.packages_billing_usage = out

        return res

    
    def billing_get_shared_storage_billing_ghe(self, request: operations.BillingGetSharedStorageBillingGheRequest) -> operations.BillingGetSharedStorageBillingGheResponse:
        r"""Get shared storage billing for an enterprise
        Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
        
        Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"
        
        The authenticated user must be an enterprise admin.
        https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-enterprise - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/enterprises/{enterprise}/settings/billing/shared-storage", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetSharedStorageBillingGheResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CombinedBillingUsage])
                res.combined_billing_usage = out

        return res

    
    def billing_get_shared_storage_billing_org(self, request: operations.BillingGetSharedStorageBillingOrgRequest) -> operations.BillingGetSharedStorageBillingOrgResponse:
        r"""Get shared storage billing for an organization
        Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
        
        Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"
        
        Access tokens must have the `repo` or `admin:org` scope.
        https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-an-organization - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orgs/{org}/settings/billing/shared-storage", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetSharedStorageBillingOrgResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CombinedBillingUsage])
                res.combined_billing_usage = out

        return res

    
    def billing_get_shared_storage_billing_user(self, request: operations.BillingGetSharedStorageBillingUserRequest) -> operations.BillingGetSharedStorageBillingUserResponse:
        r"""Get shared storage billing for a user
        Gets the estimated paid and estimated total storage used for GitHub Actions and Github Packages.
        
        Paid minutes only apply to packages stored for private repositories. For more information, see \"[Managing billing for GitHub Packages](https://help.github.com/github/setting-up-and-managing-billing-and-payments-on-github/managing-billing-for-github-packages).\"
        
        Access tokens must have the `user` scope.
        https://docs.github.com/rest/reference/billing/#get-shared-storage-billing-for-a-user - API method documentation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{username}/settings/billing/shared-storage", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.BillingGetSharedStorageBillingUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CombinedBillingUsage])
                res.combined_billing_usage = out

        return res

    