import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateClassSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class CreateClassRequest extends SpeakeasyBase {
    request: shared.ClassCreation;
    security: CreateClassSecurity;
}
export declare class CreateClassResponse extends SpeakeasyBase {
    classDetails?: shared.ClassDetails;
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
