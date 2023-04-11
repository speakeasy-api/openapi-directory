import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectUpdateRequest extends SpeakeasyBase {
    /**
     * Project description
     */
    projectUpdate: shared.ProjectUpdate;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
