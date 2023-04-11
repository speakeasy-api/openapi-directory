import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Type of the document
 */
export declare enum GetSpacesSpaceIdFoldersIdContractualDocumentsTypeEnum {
    Contract = "contract",
    EngagementLetter = "engagement-letter",
    Amendment = "amendment",
    PurchaseOrder = "purchase-order",
    DeliveryOrder = "delivery-order",
    Quotation = "quotation",
    Other = "other"
}
export declare class GetSpacesSpaceIdFoldersIdContractualDocumentsRequest extends SpeakeasyBase {
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * date range of attachment
     */
    folderDate?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Type of the document
     */
    type?: GetSpacesSpaceIdFoldersIdContractualDocumentsTypeEnum;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdContractualDocumentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of documents of the folder
     */
    getSpacesSpaceIdFoldersIdContractualDocuments200ApplicationJSONAllOfs?: shared.ContractualDocument[];
}
