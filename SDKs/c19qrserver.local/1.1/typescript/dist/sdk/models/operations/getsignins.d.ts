import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetSigninsRequest extends SpeakeasyBase {
    /**
     * Return signins with IDs less than this value.
     */
    lessThan?: number;
    /**
     * Return this many objects
     */
    returnCount?: number;
}
export declare class GetSigninsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Unauthorized
     */
    invalidToken?: shared.InvalidToken;
    /**
     * Key Failure
     */
    keyFailure?: shared.KeyFailure;
    /**
     * Successful response
     */
    signins?: shared.Signin[];
}
