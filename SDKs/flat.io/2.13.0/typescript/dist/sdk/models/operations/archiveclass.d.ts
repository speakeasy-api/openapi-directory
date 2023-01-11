import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ArchiveClassPathParams extends SpeakeasyBase {
    class: string;
}
export declare class ArchiveClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ArchiveClassRequest extends SpeakeasyBase {
    pathParams: ArchiveClassPathParams;
    security: ArchiveClassSecurity;
}
export declare class ArchiveClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
