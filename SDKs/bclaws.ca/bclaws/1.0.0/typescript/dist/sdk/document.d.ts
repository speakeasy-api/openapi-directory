import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
export declare class Document {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Retrieves a specific document from the BCLaws legislative repository (HTML format)
     *
     * @remarks
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
     */
    getDocumentIdAspectIdCivixIndexIdCivixDocumentId(req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdResponse>;
    /**
     * Retrieves a specific document from the BCLaws legislative repository with search text highlighted (HTML format)
     *
     * @remarks
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
     */
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchString(req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdSearchSearchStringResponse>;
    /**
     * Retrieves a specific document from the BCLaws legislative repository (XML format)
     *
     * @remarks
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
     */
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXml(req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlResponse>;
    /**
     * Retrieves a specific document from the BCLaws legislative repository with search text highlighted (XML format)
     *
     * @remarks
     * The /document API allows you to retrieve actual documents from the BCLaws legislative repository. To retrieve a document from the repository you need the aspect identifier and two other specific pieces of information about the document: the index identifier and the document identifier. These unique identifiers can be retrieved from the /content API.
     */
    getDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchString(req: operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringRequest, config?: AxiosRequestConfig): Promise<operations.GetDocumentIdAspectIdCivixIndexIdCivixDocumentIdXmlSearchSearchStringResponse>;
}
