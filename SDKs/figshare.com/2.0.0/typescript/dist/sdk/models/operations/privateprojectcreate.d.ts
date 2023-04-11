import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Created
     */
    createProjectResponse?: shared.CreateProjectResponse;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
