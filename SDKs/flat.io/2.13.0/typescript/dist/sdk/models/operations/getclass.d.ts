import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetClassPathParams extends SpeakeasyBase {
    class: string;
}
export declare class GetClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class GetClassRequest extends SpeakeasyBase {
    pathParams: GetClassPathParams;
    security: GetClassSecurity;
}
export declare class GetClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
