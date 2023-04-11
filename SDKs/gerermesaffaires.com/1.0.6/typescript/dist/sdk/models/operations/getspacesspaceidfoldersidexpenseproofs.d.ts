import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Status of the expense proof
 */
export declare enum GetSpacesSpaceIdFoldersIdExpenseProofsStatusEnum {
    R = "R",
    W = "W",
    V = "V"
}
export declare class GetSpacesSpaceIdFoldersIdExpenseProofsRequest extends SpeakeasyBase {
    /**
     * date range of the documents
     */
    date?: string;
    /**
     * date range of attachment
     */
    folderDate?: string;
    /**
     * To return expense proofs not attached to an expense report
     */
    noExpenseReport?: boolean;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Status of the expense proof
     */
    status?: GetSpacesSpaceIdFoldersIdExpenseProofsStatusEnum;
    /**
     * Id of the folder
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdExpenseProofsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of expense proof of the folder (if the folder is social the PersonId is also returned)
     */
    getSpacesSpaceIdFoldersIdExpenseProofs200ApplicationJSONAllOfs?: shared.ExpenseProof[];
}
