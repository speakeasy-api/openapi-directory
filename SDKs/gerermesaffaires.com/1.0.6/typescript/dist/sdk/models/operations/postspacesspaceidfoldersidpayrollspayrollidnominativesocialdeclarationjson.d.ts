import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJsonSecurity extends SpeakeasyBase {
    gmaAuth: string;
}
export declare enum PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2AccountingWorkbookEnum {
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
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2Accounting extends SpeakeasyBase {
    accountedOn?: string;
    workbook?: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2AccountingWorkbookEnum;
    yearMonth?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2File extends SpeakeasyBase {
    content64Encoded?: string;
    name?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2 extends SpeakeasyBase {
    accounting?: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2Accounting;
    author?: string;
    code?: string;
    comment?: string;
    date?: string;
    file: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson2File;
    title: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationApplicationJson1 extends SpeakeasyBase {
    documentId?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJsonRequest extends SpeakeasyBase {
    /**
     * Document to add (either DocumentId either (File,Name,Content64Encoded,Title) is mandatory)
     */
    requestBody: any;
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
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJson201ApplicationJSON extends SpeakeasyBase {
    id?: string;
}
export declare class PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJsonResponse extends SpeakeasyBase {
    contentType: string;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Id of document created
     */
    postSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJSON201ApplicationJSONObject?: PostSpacesSpaceIdFoldersIdPayrollsPayrollIdNominativeSocialDeclarationJson201ApplicationJSON;
}
