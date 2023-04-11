import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSpacesSpaceIdLoansAllRequest extends SpeakeasyBase {
    /**
     * Id of the space
     */
    spaceId: string;
}
export declare class GetSpacesSpaceIdLoansAllResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A list of loan folders
     */
    getSpacesSpaceIdLoansAll200ApplicationJSONAllOfs?: shared.Loan[];
}
