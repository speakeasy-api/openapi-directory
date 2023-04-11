import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdPayslipsJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2Accounting;
    author?: string;
    begin?: string;
    code?: string;
    comment?: string;
    date?: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    file: PostSpacesSpaceIdFoldersIdPayslipsApplicationJson2File;
    fixedGrossAmount?: number;
    netAmount?: number;
    title: string;
    totalGrossAmount?: number;
    vacation?: number;
    variableGrossAmount?: number;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsApplicationJson1 extends SpeakeasyBase {
    begin?: string;
    documentId: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    fixedGrossAmount?: number;
    netAmount?: number;
    totalGrossAmount?: number;
    vacation?: number;
    variableGrossAmount?: number;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsJsonRequest extends SpeakeasyBase {
    /**
     * Payslip to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: any;
    /**
     * Id of the folder employee
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
export declare class PostSpacesSpaceIdFoldersIdPayslipsJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdPayslipsJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdPayslipsJson201ApplicationJSON;
}
