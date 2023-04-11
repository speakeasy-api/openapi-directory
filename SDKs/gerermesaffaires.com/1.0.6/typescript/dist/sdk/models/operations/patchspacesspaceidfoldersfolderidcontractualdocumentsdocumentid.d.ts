import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequestBodyTypeEnum {
    Contract = "contract",
    EngagementLetter = "engagement-letter",
    Amendment = "amendment",
    PurchaseOrder = "purchase-order",
    DeliveryOrder = "delivery-order",
    Quotation = "quotation",
    Other = "other"
}
/**
 * A contractual document to modify
 */
export declare class PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequestBody extends SpeakeasyBase {
    amount?: string;
    designation?: string;
    reference?: string;
    startDate?: string;
    type?: PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequestBodyTypeEnum;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequest extends SpeakeasyBase {
    /**
     * A contractual document to modify
     */
    requestBody?: PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdRequestBody;
    /**
     * Id of the document
     */
    documentId: string;
    /**
     * Id of the folder
     */
    folderId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class PatchSpacesSpaceIdFoldersFolderIdContractualDocumentsDocumentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
