import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateAndPreserveKeyPairRequest extends SpeakeasyBase {
    createKeyPairRequest: shared.CreateKeyPairRequest;
    /**
     * Authentication token
     */
    xSdsAuthToken?: string;
}
export declare class CreateAndPreserveKeyPairResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Bad Request
     */
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
