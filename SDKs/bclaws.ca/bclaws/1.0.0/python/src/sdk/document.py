import requests
from sdk.models import operations
from . import utils

class Document:
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

    
    def get_document_id_aspect_id_civix_index_id_civix_document_id_(self, request: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDRequest) -> operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDResponse:
        r"""Retrieves a specific document from the BCLaws legislative repository (HTML format)
        The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_document_id_aspect_id_civix_index_id_civix_document_id_search_search_string_(self, request: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringRequest) -> operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringResponse:
        r"""Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
        The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/search/{searchString}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDSearchSearchStringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_document_id_aspect_id_civix_index_id_civix_document_id_xml(self, request: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLRequest) -> operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLResponse:
        r"""Retrieves a specific document from the BCLaws legislative repository (XML format)
        The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def get_document_id_aspect_id_civix_index_id_civix_document_id_xml_search_search_string_(self, request: operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringRequest) -> operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringResponse:
        r"""Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)
        The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/document/id/{aspectId}/{civixIndexId}/{civixDocumentId}/xml/search/{searchString}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDocumentIDAspectIDCivixIndexIDCivixDocumentIDXMLSearchSearchStringResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    