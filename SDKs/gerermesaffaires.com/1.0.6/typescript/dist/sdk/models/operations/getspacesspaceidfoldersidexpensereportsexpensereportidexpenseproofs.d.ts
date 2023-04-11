import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the expense proof
 */
export declare enum GetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsStatusEnum {
    R = "R",
    W = "W",
    V = "V"
}
export declare class GetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsRequest extends SpeakeasyBase {
    /**
     * Date of the documents (YYYY or YYYYMM or YYYYMMDD)
     */
    date?: string;
    /**
     * Date of upload of the document (YYYY or YYYYMM or YYYYMMDD)
     */
    folderDate?: string;
    /**
     * Status of the expense proof
     */
    status?: GetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsStatusEnum;
    /**
     * Id of the expense report
     */
    expenseReportId: string;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of expense proof of the folder (if the folder is social the PersonId is also returned)
     */
    getSpacesSpaceIdFoldersIdExpenseReportsExpenseReportIdExpenseProofs200ApplicationJSONAllOfs?: shared.ExpenseProof[];
}
