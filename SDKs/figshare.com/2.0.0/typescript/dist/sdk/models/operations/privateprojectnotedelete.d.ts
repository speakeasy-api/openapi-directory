import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectNoteDeletePathParams extends SpeakeasyBase {
    noteId: number;
    projectId: number;
}
export declare class PrivateProjectNoteDeleteSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectNoteDeleteRequest extends SpeakeasyBase {
    pathParams: PrivateProjectNoteDeletePathParams;
    security: PrivateProjectNoteDeleteSecurity;
}
export declare class PrivateProjectNoteDeleteResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    statusCode: number;
}
