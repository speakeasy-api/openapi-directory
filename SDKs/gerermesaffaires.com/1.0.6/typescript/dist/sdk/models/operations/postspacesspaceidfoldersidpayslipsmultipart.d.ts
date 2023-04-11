import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipartSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdPayslipsMultipartFormDataAccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipartFormDataAccounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdPayslipsMultipartFormDataAccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipartFormDataFile extends SpeakeasyBase {
    file: string;
    content: Uint8Array;
}
/**
 * Payslip to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
 */
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipartFormData1 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdPayslipsMultipartFormDataAccounting;
    author?: string;
    begin?: string;
    code?: string;
    comment?: string;
    date?: string;
    employeeContributions?: number;
    employerContributions?: number;
    end?: string;
    file: PostSpacesSpaceIdFoldersIdPayslipsMultipartFormDataFile;
    fixedGrossAmount?: number;
    netAmount?: number;
    title: string;
    totalGrossAmount?: number;
    vacation?: number;
    variableGrossAmount?: number;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipartRequest extends SpeakeasyBase {
    /**
     * Payslip to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: PostSpacesSpaceIdFoldersIdPayslipsMultipartFormData1;
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
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipart201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayslipsMultipartResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdPayslipsMultipart201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdPayslipsMultipart201ApplicationJSON;
}
