import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UnarchiveClassPathParams extends SpeakeasyBase {
    class: string;
}
export declare class UnarchiveClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class UnarchiveClassRequest extends SpeakeasyBase {
    pathParams: UnarchiveClassPathParams;
    security: UnarchiveClassSecurity;
}
export declare class UnarchiveClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
