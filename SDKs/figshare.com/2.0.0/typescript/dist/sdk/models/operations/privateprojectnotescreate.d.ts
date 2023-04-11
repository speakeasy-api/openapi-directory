import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PrivateProjectNotesCreateSecurity extends SpeakeasyBase {
    oAuth2: string;
}
export declare class PrivateProjectNotesCreateRequest extends SpeakeasyBase {
    /**
     * Note message
     */
    projectNoteCreate: shared.ProjectNoteCreate;
    /**
     * Project unique identifier
     */
    projectId: number;
}
export declare class PrivateProjectNotesCreateResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Forbidden
     */
    errorMessage?: shared.ErrorMessage;
    headers?: Record<string, string[]>;
    /**
     * Created
     */
    location?: shared.Location;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
