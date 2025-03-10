import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectCollaboratorDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectCollaboratorDeleteRequest extends SpeakeasyBase {
    /**
     * Project unique identifier
     */
    projectId: number;
    /**
     * User unique identifier
     */
    userId: number;
}
export declare class PrivateProjectCollaboratorDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
