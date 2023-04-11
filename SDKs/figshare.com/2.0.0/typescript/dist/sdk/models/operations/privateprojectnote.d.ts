import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectNoteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectNoteRequest extends SpeakeasyBase {
    /**
     * Note unique identifier
     */
    noteId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectNoteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    /**
     * OK. Note representation
     */
    projectNotePrivate?: shared.ProjectNotePrivate;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
