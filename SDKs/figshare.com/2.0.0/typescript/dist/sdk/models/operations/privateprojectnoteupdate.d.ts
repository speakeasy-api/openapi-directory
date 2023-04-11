import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectNoteUpdateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectNoteUpdateRequest extends SpeakeasyBase {
    /**
     * Note message
     */
    projectNoteCreate: shared.ProjectNoteCreate;
    /**
     * Note unique identifier
     */
    noteId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectNoteUpdateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
