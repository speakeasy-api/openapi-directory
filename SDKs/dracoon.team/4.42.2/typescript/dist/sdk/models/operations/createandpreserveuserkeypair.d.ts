import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAndPreserveUserKeyPairRequest extends SpeakeasyBase {
    createKeyPairRequest: shared.CreateKeyPairRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateAndPreserveUserKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
