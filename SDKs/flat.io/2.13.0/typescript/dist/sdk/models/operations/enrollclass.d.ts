import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EnrollClassPathParams extends SpeakeasyBase {
    enrollmentCode: string;
}
export declare class EnrollClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class EnrollClassRequest extends SpeakeasyBase {
    pathParams: EnrollClassPathParams;
    security: EnrollClassSecurity;
}
export declare class EnrollClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
