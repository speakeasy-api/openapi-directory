import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUsersUseridAuthorizationPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DeleteUsersUseridAuthorizationSecurity extends SpeakeasyBase {
    clientAccessToken: shared.SchemeClientAccessToken;
}
export declare class DeleteUsersUseridAuthorizationRequest extends SpeakeasyBase {
    pathParams: DeleteUsersUseridAuthorizationPathParams;
    security: DeleteUsersUseridAuthorizationSecurity;
}
export declare class DeleteUsersUseridAuthorizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
