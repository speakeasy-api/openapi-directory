import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormDataAccounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormDataFile;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartRequest extends SpeakeasyBase {
    /**
     * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartFormData1;
    /**
     * Id of the folder social
     */
    id: string;
    /**
     * Id of the payroll
     */
    payrollId: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
/**
 * Id of document created
 */
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationMultipart201ApplicationJSON;
}
