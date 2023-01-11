import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateClassPathParams extends SpeakeasyBase {
    class: string;
}
export declare class UpdateClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UpdateClassRequest extends SpeakeasyBase {
    pathParams: UpdateClassPathParams;
    request?: shared.ClassUpdate;
    security: UpdateClassSecurity;
}
export declare class UpdateClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
