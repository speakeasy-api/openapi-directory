import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteClassUserPathParams extends SpeakeasyBase {
    class: string;
    user: string;
}
export declare class DeleteClassUserSecurity extends SpeakeasyBase {
    oAuth2: shared.SchemeOAuth2;
}
export declare class DeleteClassUserRequest extends SpeakeasyBase {
    pathParams: DeleteClassUserPathParams;
    security: DeleteClassUserSecurity;
}
export declare class DeleteClassUserResponse extends SpeakeasyBase {
    contentType: string;
    flatErrorResponse?: shared.FlatErrorResponse;
    statusCode: number;
}
