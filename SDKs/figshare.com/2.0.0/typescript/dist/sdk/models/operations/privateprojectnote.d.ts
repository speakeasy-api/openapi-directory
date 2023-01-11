import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectNotePathParams extends SpeakeasyBase {
    noteId: number;
    projectId: number;
}
export declare class PrivateProjectNoteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectNoteRequest extends SpeakeasyBase {
    pathParams: PrivateProjectNotePathParams;
    security: PrivateProjectNoteSecurity;
}
export declare class PrivateProjectNoteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    projectNotePrivate?: shared.ProjectNotePrivate;
    statusCode: number;
}
