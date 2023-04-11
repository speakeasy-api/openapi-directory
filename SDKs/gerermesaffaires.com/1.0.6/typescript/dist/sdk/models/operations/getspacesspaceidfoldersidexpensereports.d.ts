import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * name of value for sort
 */
export declare enum GetSpacesSpaceIdFoldersIdExpenseReportsSortNameEnum {
    ExpenseDate = "ExpenseDate",
    InclVAT = "InclVAT",
    Title = "Title"
}
/**
 * order of sort (if absent default is asc)
 */
export declare enum GetSpacesSpaceIdFoldersIdExpenseReportsSortOrderEnum {
    Asc = "asc",
    Desc = "desc"
}
/**
 * If present returns also the data extend
 */
export declare enum GetSpacesSpaceIdFoldersIdExpenseReportsWithExtendEnum {
    True = "true",
    False = "false"
}
export declare class GetSpacesSpaceIdFoldersIdExpenseReportsRequest extends SpeakeasyBase {
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * range of ExpenseDate (valid available)
     */
    expenseDate?: any;
    /**
     * date range of attachment
     */
    folderDate?: string;
    /**
     * range of processing date (boolean available)
     */
    processingDate?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * name of value for sort
     */
    sortName?: GetSpacesSpaceIdFoldersIdExpenseReportsSortNameEnum;
    /**
     * order of sort (if absent default is asc)
     */
    sortOrder?: GetSpacesSpaceIdFoldersIdExpenseReportsSortOrderEnum;
    /**
     * If present returns also the data extend
     */
    withExtend?: GetSpacesSpaceIdFoldersIdExpenseReportsWithExtendEnum;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdExpenseReportsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of expense reports of the folder (if the folder is social the PersonId is also returned)
     */
    getSpacesSpaceIdFoldersIdExpenseReports200ApplicationJSONAllOfs?: shared.ExpenseReport[];
}
