import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddClassUserPathParams extends SpeakeasyBase {
    class: string;
    user: string;
}
export declare class AddClassUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class AddClassUserRequest extends SpeakeasyBase {
    pathParams: AddClassUserPathParams;
    security: AddClassUserSecurity;
}
export declare class AddClassUserResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
