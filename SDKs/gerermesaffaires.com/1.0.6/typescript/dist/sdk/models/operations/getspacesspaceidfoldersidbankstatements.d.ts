import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdFoldersIdBankStatementsRequest extends SpeakeasyBase {
    /**
     * range date of the documents
     */
    date?: string;
    /**
     * Number of the bank statement
     */
    number?: string;
    /**
     * index range of the results
     */
    range?: string;
    /**
     * Id of the folder bank
     */
    id: string;
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdFoldersIdBankStatementsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of bank statements of the folder bank
     */
    getSpacesSpaceIdFoldersIdBankStatements200ApplicationJSONAllOfs?: shared.BankStatement[];
}
