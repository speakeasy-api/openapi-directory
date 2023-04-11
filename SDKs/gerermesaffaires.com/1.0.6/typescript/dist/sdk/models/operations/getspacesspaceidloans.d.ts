import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLoansRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLoansResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of loan folders
     */
    getSpacesSpaceIdLoans200ApplicationJSONAllOfs?: shared.Loan[];
}
