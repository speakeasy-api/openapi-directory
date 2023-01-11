import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectNoteUpdatePathParams extends SpeakeasyBase {
    noteId: number;
    projectId: number;
}
export declare class PrivateProjectNoteUpdateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectNoteUpdateRequest extends SpeakeasyBase {
    pathParams: PrivateProjectNoteUpdatePathParams;
    request: shared.ProjectNoteCreate;
    security: PrivateProjectNoteUpdateSecurity;
}
export declare class PrivateProjectNoteUpdateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    statusCode: number;
}
