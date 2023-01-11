import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Articles:
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

    
    def account_article_report(self, request: operations.AccountArticleReportRequest) -> operations.AccountArticleReportResponse:
        r"""Account Article Report
        Return status on all reports generated for the account from the oauth credentials
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/articles/export"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountArticleReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AccountReport]])
                res.account_reports = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def account_article_report_generate(self, request: operations.AccountArticleReportGenerateRequest) -> operations.AccountArticleReportGenerateResponse:
        r"""Initiate a new Report
        Initiate a new Article Report for this Account
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/articles/export"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AccountArticleReportGenerateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountReport])
                res.account_report = out
        elif r.status_code == 500:
            pass

        return res

    
    def article_details(self, request: operations.ArticleDetailsRequest) -> operations.ArticleDetailsResponse:
        r"""View article details
        View an article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleComplete])
                res.article_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def article_file_details(self, request: operations.ArticleFileDetailsRequest) -> operations.ArticleFileDetailsResponse:
        r"""Article file details
        File by id
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}/files/{file_id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleFileDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PublicFile])
                res.public_file = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def article_files(self, request: operations.ArticleFilesRequest) -> operations.ArticleFilesResponse:
        r"""List article files
        Files list for article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}/files", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PublicFile]])
                res.public_files = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def article_version_confidentiality(self, request: operations.ArticleVersionConfidentialityRequest) -> operations.ArticleVersionConfidentialityResponse:
        r"""Public Article Confidentiality for article version
        Confidentiality for article version. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}/versions/{v_number}/confidentiality", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleVersionConfidentialityResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleConfidentiality])
                res.article_confidentiality = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def article_version_details(self, request: operations.ArticleVersionDetailsRequest) -> operations.ArticleVersionDetailsResponse:
        r"""Article details for version
        Article with specified version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}/versions/{v_number}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleVersionDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleComplete])
                res.article_complete = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def article_version_embargo(self, request: operations.ArticleVersionEmbargoRequest) -> operations.ArticleVersionEmbargoResponse:
        r"""Public Article Embargo for article version
        Embargo for article version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}/versions/{v_number}/embargo", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleVersionEmbargoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleEmbargo])
                res.article_embargo = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def article_version_update_thumb(self, request: operations.ArticleVersionUpdateThumbRequest) -> operations.ArticleVersionUpdateThumbResponse:
        r"""Article Version Update Thumb
        For a given public article version update the article thumb by choosing one of the associated files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/versions/{version_id}/update_thumb", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleVersionUpdateThumbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass

        return res

    
    def article_versions(self, request: operations.ArticleVersionsRequest) -> operations.ArticleVersionsResponse:
        r"""List article versions
        List public article versions
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/articles/{article_id}/versions", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticleVersionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ArticleVersions]])
                res.article_versions = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def articles_list(self, request: operations.ArticlesListRequest) -> operations.ArticlesListResponse:
        r"""Public Articles
        Returns a list of public articles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/articles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticlesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def articles_search(self, request: operations.ArticlesSearchRequest) -> operations.ArticlesSearchResponse:
        r"""Public Articles Search
        Returns a list of public articles, filtered by the search parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/articles/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ArticlesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_author_delete(self, request: operations.PrivateArticleAuthorDeleteRequest) -> operations.PrivateArticleAuthorDeleteResponse:
        r"""Delete article author
        De-associate author from article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/authors/{author_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleAuthorDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_authors_add(self, request: operations.PrivateArticleAuthorsAddRequest) -> operations.PrivateArticleAuthorsAddResponse:
        r"""Add article authors
        Associate new authors with the article. This will add new authors to the list of already associated authors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/authors", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleAuthorsAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_authors_list(self, request: operations.PrivateArticleAuthorsListRequest) -> operations.PrivateArticleAuthorsListResponse:
        r"""List article authors
        List article authors
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/authors", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleAuthorsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Author]])
                res.authors = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_authors_replace(self, request: operations.PrivateArticleAuthorsReplaceRequest) -> operations.PrivateArticleAuthorsReplaceResponse:
        r"""Replace article authors
        Associate new authors with the article. This will remove all already associated authors and add these new ones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/authors", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleAuthorsReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_categories_add(self, request: operations.PrivateArticleCategoriesAddRequest) -> operations.PrivateArticleCategoriesAddResponse:
        r"""Add article categories
        Associate new categories with the article. This will add new categories to the list of already associated categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/categories", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleCategoriesAddResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_categories_list(self, request: operations.PrivateArticleCategoriesListRequest) -> operations.PrivateArticleCategoriesListResponse:
        r"""List article categories
        List article categories
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/categories", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleCategoriesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Category]])
                res.categories = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_categories_replace(self, request: operations.PrivateArticleCategoriesReplaceRequest) -> operations.PrivateArticleCategoriesReplaceResponse:
        r"""Replace article categories
        Associate new categories with the article. This will remove all already associated categories and add these new ones
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/categories", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleCategoriesReplaceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_category_delete(self, request: operations.PrivateArticleCategoryDeleteRequest) -> operations.PrivateArticleCategoryDeleteResponse:
        r"""Delete article category
        De-associate category from article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/categories/{category_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleCategoryDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_confidentiality_delete(self, request: operations.PrivateArticleConfidentialityDeleteRequest) -> operations.PrivateArticleConfidentialityDeleteResponse:
        r"""Delete article confidentiality
        Delete confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/confidentiality", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleConfidentialityDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_confidentiality_details(self, request: operations.PrivateArticleConfidentialityDetailsRequest) -> operations.PrivateArticleConfidentialityDetailsResponse:
        r"""Article confidentiality details
        View confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/confidentiality", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleConfidentialityDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleConfidentiality])
                res.article_confidentiality = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_confidentiality_update(self, request: operations.PrivateArticleConfidentialityUpdateRequest) -> operations.PrivateArticleConfidentialityUpdateResponse:
        r"""Update article confidentiality
        Update confidentiality settings. The confidentiality feature is now deprecated. This has been replaced by the new extended embargo functionality and all items that used to be confidential have now been migrated to items with a permanent embargo on files. All API endpoints related to this functionality will remain for backwards compatibility, but will now be attached to the new extended embargo workflows.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/confidentiality", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleConfidentialityUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_create(self, request: operations.PrivateArticleCreateRequest) -> operations.PrivateArticleCreateResponse:
        r"""Create new Article
        Create a new Article by sending article information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/articles"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_delete(self, request: operations.PrivateArticleDeleteRequest) -> operations.PrivateArticleDeleteResponse:
        r"""Delete article
        Delete an article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_details(self, request: operations.PrivateArticleDetailsRequest) -> operations.PrivateArticleDetailsResponse:
        r"""Article details
        View a private article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleCompletePrivate])
                res.article_complete_private = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_embargo_delete(self, request: operations.PrivateArticleEmbargoDeleteRequest) -> operations.PrivateArticleEmbargoDeleteResponse:
        r"""Delete Article Embargo
        Will lift the embargo for the specified article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/embargo", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleEmbargoDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_embargo_details(self, request: operations.PrivateArticleEmbargoDetailsRequest) -> operations.PrivateArticleEmbargoDetailsResponse:
        r"""Article Embargo Details
        View a private article embargo details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/embargo", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleEmbargoDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleEmbargo])
                res.article_embargo = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_embargo_update(self, request: operations.PrivateArticleEmbargoUpdateRequest) -> operations.PrivateArticleEmbargoUpdateResponse:
        r"""Update Article Embargo
        Note: setting an article under whole embargo does not imply that the article will be published when the embargo will expire. You must explicitly call the publish endpoint to enable this functionality.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/embargo", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleEmbargoUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_file(self, request: operations.PrivateArticleFileRequest) -> operations.PrivateArticleFileResponse:
        r"""Single File
        View details of file for specified article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/files/{file_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PrivateFile])
                res.private_file = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_file_delete(self, request: operations.PrivateArticleFileDeleteRequest) -> operations.PrivateArticleFileDeleteResponse:
        r"""File Delete
        Complete file upload
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/files/{file_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleFileDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_files_list(self, request: operations.PrivateArticleFilesListRequest) -> operations.PrivateArticleFilesListResponse:
        r"""List article files
        List private files
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/files", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleFilesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PrivateFile]])
                res.private_files = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_private_link(self, request: operations.PrivateArticlePrivateLinkRequest) -> operations.PrivateArticlePrivateLinkResponse:
        r"""List private links
        List private links
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/private_links", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlePrivateLinkResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.PrivateLink]])
                res.private_links = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_private_link_create(self, request: operations.PrivateArticlePrivateLinkCreateRequest) -> operations.PrivateArticlePrivateLinkCreateResponse:
        r"""Create private link
        Create new private link for this article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/private_links", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlePrivateLinkCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_private_link_delete(self, request: operations.PrivateArticlePrivateLinkDeleteRequest) -> operations.PrivateArticlePrivateLinkDeleteResponse:
        r"""Disable private link
        Disable/delete private link for this article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/private_links/{link_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlePrivateLinkDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_private_link_update(self, request: operations.PrivateArticlePrivateLinkUpdateRequest) -> operations.PrivateArticlePrivateLinkUpdateResponse:
        r"""Update private link
        Update existing private link for this article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/private_links/{link_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlePrivateLinkUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_publish(self, request: operations.PrivateArticlePublishRequest) -> operations.PrivateArticlePublishResponse:
        r"""Private Article Publish
        - If the whole article is under embargo, it will not be published immediatly, but when the embargo expires or is lifted.
        - When an article is published, a new public version will be generated. Any further updates to the article will affect the private article data. In order to make these changes publicly visible, an explicit publish operation is needed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/publish", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlePublishResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_reserve_doi(self, request: operations.PrivateArticleReserveDoiRequest) -> operations.PrivateArticleReserveDoiResponse:
        r"""Private Article Reserve DOI
        Reserve DOI for article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/reserve_doi", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleReserveDoiResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleDoi])
                res.article_doi = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_reserve_handle(self, request: operations.PrivateArticleReserveHandleRequest) -> operations.PrivateArticleReserveHandleResponse:
        r"""Private Article Reserve Handle
        Reserve Handle for article
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/reserve_handle", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleReserveHandleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArticleHandle])
                res.article_handle = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_update(self, request: operations.PrivateArticleUpdateRequest) -> operations.PrivateArticleUpdateResponse:
        r"""Update article
        Updating an article by passing body parameters
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 205:
            res.headers = r.headers
            
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_upload_complete(self, request: operations.PrivateArticleUploadCompleteRequest) -> operations.PrivateArticleUploadCompleteResponse:
        r"""Complete Upload
        Complete file upload
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/files/{file_id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleUploadCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_article_upload_initiate(self, request: operations.PrivateArticleUploadInitiateRequest) -> operations.PrivateArticleUploadInitiateResponse:
        r"""Initiate Upload
        Initiate a new file upload within the article. Either use the link property to point to an existing file that resides elsewhere and will not be uploaded to Figshare or use the other 3 parameters (md5, name, size).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/account/articles/{article_id}/files", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticleUploadInitiateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Location])
                res.location = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 404:
            pass
        elif r.status_code == 422:
            pass
        elif r.status_code == 500:
            pass

        return res

    
    def private_articles_list(self, request: operations.PrivateArticlesListRequest) -> operations.PrivateArticlesListResponse:
        r"""Private Articles
        Get Own Articles
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/articles"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    
    def private_articles_search(self, request: operations.PrivateArticlesSearchRequest) -> operations.PrivateArticlesSearchResponse:
        r"""Private Articles search
        Returns a list of private articles filtered by the search parameters
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/articles/search"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PrivateArticlesSearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.Article]])
                res.articles = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 403:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorMessage])
                res.error_message = out
        elif r.status_code == 500:
            pass

        return res

    