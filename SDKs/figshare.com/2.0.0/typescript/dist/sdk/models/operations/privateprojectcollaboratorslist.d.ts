import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectCollaboratorsListSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectCollaboratorsListRequest extends SpeakeasyBase {
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectCollaboratorsListResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. List of Collaborators
     */
    projectCollaborators?: shared.ProjectCollaborator[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
