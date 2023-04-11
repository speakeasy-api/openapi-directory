import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class CreateTokenResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The token.
     */
    eeCreateTokenResponse?: shared.EeCreateTokenResponse;
    /**
     * Bad request.
     */
    serviceError?: shared.ServiceError;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
