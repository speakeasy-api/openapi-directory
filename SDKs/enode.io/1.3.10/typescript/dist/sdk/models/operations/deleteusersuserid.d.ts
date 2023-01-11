import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteUsersUseridPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class DeleteUsersUseridSecurity extends SpeakeasyBase {
    clientAccessToken: shared.SchemeClientAccessToken;
}
export declare class DeleteUsersUseridRequest extends SpeakeasyBase {
    pathParams: DeleteUsersUseridPathParams;
    security: DeleteUsersUseridSecurity;
}
export declare class DeleteUsersUseridResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
