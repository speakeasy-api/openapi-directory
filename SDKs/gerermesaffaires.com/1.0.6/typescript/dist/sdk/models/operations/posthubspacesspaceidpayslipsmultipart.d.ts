import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubSpacesSpaceIdPayslipsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubSpacesSpaceIdPayslipsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubSpacesSpaceIdPayslipsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add
 */
export declare class PostHubSpacesSpaceIdPayslipsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostHubSpacesSpaceIdPayslipsMultipartFormDataAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostHubSpacesSpaceIdPayslipsMultipartFormDataFile;
    title: string;
}
export declare class PostHubSpacesSpaceIdPayslipsMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add
     */
    requestBody: PostHubSpacesSpaceIdPayslipsMultipartFormData1;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of documents created
 */
export declare class PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubSpacesSpaceIdPayslipsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubSpacesSpaceIdPayslipsMultipart201ApplicationJSONObject?: PostHubSpacesSpaceIdPayslipsMultipart201ApplicationJSON;
}
