import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubSpacesSpaceIdDocumentsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubSpacesSpaceIdDocumentsApplicationJSONAccountingWorkbookEnum {
    Customer = "customer",
    Provider = "provider",
    Bank = "bank",
    CashWoucher = "cashWoucher",
    Fiscal = "fiscal",
    Insurance = "insurance",
    Social = "social",
    Other = "other",
    Permanent = "permanent"
}
export declare class PostHubSpacesSpaceIdDocumentsApplicationJSONAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubSpacesSpaceIdDocumentsApplicationJSONAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubSpacesSpaceIdDocumentsApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Document to add
 */
export declare class PostHubSpacesSpaceIdDocumentsApplicationJSON extends SpeakeasyBase {
    accounting?: PostHubSpacesSpaceIdDocumentsApplicationJSONAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostHubSpacesSpaceIdDocumentsApplicationJSONFile;
    title: string;
}
export declare class PostHubSpacesSpaceIdDocumentsJsonRequest extends SpeakeasyBase {
    /**
     * Document to add
     */
    requestBody: PostHubSpacesSpaceIdDocumentsApplicationJSON;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of documents created
 */
export declare class PostHubSpacesSpaceIdDocumentsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubSpacesSpaceIdDocumentsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubSpacesSpaceIdDocumentsJSON201ApplicationJSONObject?: PostHubSpacesSpaceIdDocumentsJson201ApplicationJSON;
}
