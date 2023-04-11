import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubSpacesSpaceIdDocumentsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubSpacesSpaceIdDocumentsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostHubSpacesSpaceIdDocumentsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubSpacesSpaceIdDocumentsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubSpacesSpaceIdDocumentsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add
 */
export declare class PostHubSpacesSpaceIdDocumentsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostHubSpacesSpaceIdDocumentsMultipartFormDataAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostHubSpacesSpaceIdDocumentsMultipartFormDataFile;
    title: string;
}
export declare class PostHubSpacesSpaceIdDocumentsMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add
     */
    requestBody: PostHubSpacesSpaceIdDocumentsMultipartFormData1;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of documents created
 */
export declare class PostHubSpacesSpaceIdDocumentsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubSpacesSpaceIdDocumentsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubSpacesSpaceIdDocumentsMultipart201ApplicationJSONObject?: PostHubSpacesSpaceIdDocumentsMultipart201ApplicationJSON;
}
