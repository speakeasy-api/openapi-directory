import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectPublishSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectPublishRequest extends SpeakeasyBase {
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectPublishResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK
     */
    responseMessage?: shared.ResponseMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
