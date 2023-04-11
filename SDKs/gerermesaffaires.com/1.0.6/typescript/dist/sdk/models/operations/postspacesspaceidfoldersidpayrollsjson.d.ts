import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdPayrollsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2Accounting;
    author?: string;
    begin?: string;
    code?: string;
    comment?: string;
    date?: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    file: PostSpacesSpaceIdFoldersIdPayrollsApplicationJson2File;
    netAmount?: number;
    title: string;
    totalGrossAmount?: number;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsApplicationJson1 extends SpeakeasyBase {
    begin?: string;
    documentId: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    netAmount?: number;
    totalGrossAmount?: number;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsJsonRequest extends SpeakeasyBase {
    /**
     * Payroll to add or to generate
     */
    requestBody: any;
    /**
     * Id of the folder social
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdFoldersIdPayrollsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdPayrollsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdPayrollsJson201ApplicationJSON;
}
