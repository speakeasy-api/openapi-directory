import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostHubSpacesSpaceIdPayslipsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostHubSpacesSpaceIdPayslipsApplicationJSONAccountingWorkbookEnum {
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
export declare class PostHubSpacesSpaceIdPayslipsApplicationJSONAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostHubSpacesSpaceIdPayslipsApplicationJSONAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostHubSpacesSpaceIdPayslipsApplicationJSONFile extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
/**
 * Document to add
 */
export declare class PostHubSpacesSpaceIdPayslipsApplicationJSON extends SpeakeasyBase {
    accounting?: PostHubSpacesSpaceIdPayslipsApplicationJSONAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostHubSpacesSpaceIdPayslipsApplicationJSONFile;
    title: string;
}
export declare class PostHubSpacesSpaceIdPayslipsJsonRequest extends SpeakeasyBase {
    /**
     * Document to add
     */
    requestBody: PostHubSpacesSpaceIdPayslipsApplicationJSON;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of documents created
 */
export declare class PostHubSpacesSpaceIdPayslipsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostHubSpacesSpaceIdPayslipsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of documents created
     */
    postHubSpacesSpaceIdPayslipsJSON201ApplicationJSONObject?: PostHubSpacesSpaceIdPayslipsJson201ApplicationJSON;
}
