import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ActivateClassPathParams extends SpeakeasyBase {
    class: string;
}
export declare class ActivateClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class ActivateClassRequest extends SpeakeasyBase {
    pathParams: ActivateClassPathParams;
    security: ActivateClassSecurity;
}
export declare class ActivateClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
