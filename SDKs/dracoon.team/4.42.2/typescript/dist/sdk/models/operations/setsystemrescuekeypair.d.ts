import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class SetSystemRescueKeyPairRequest extends SpeakeasyBase {
    userKeyPairContainer: shared.UserKeyPairContainer;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class SetSystemRescueKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
