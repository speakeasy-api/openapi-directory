import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PrivateProjectNotesListPathParams extends SpeakeasyBase {
    projectId: number;
}
export declare class PrivateProjectNotesListQueryParams extends SpeakeasyBase {
    limit?: number;
    offset?: number;
    page?: number;
    pageSize?: number;
}
export declare class PrivateProjectNotesListSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class PrivateProjectNotesListRequest extends SpeakeasyBase {
    pathParams: PrivateProjectNotesListPathParams;
    queryParams: PrivateProjectNotesListQueryParams;
    security: PrivateProjectNotesListSecurity;
}
export declare class PrivateProjectNotesListResponse extends SpeakeasyBase {
    contentType: string;
    errorMessage?: shared.ErrorMessage;
    projectNotes?: shared.ProjectNote[];
    statusCode: number;
}
