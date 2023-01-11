import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectNotesCreatePathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectNotesCreateSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectNotesCreateRequest extends SpeakeasyBase {
    pathParams: PrivateProjectNotesCreatePathParams;
    request: shared.ProjectNoteCreate;
    security: PrivateProjectNotesCreateSecurity;
}
export declare class PrivateProjectNotesCreateResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    headers: Record<string, string[]>;
    location?: shared.Location;
    statusCode: number;
}
