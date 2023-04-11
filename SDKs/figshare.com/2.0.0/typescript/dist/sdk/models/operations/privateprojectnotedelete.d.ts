import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectNoteDeleteSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectNoteDeleteRequest extends SpeakeasyBase {
    /**
     * Note unique identifier
     */
    noteId: number;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectNoteDeleteResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
