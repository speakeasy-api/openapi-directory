import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectDeleteRequest extends SpeakeasyBase {
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
