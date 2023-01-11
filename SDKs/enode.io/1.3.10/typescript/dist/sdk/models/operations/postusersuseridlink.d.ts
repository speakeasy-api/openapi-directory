import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostUsersUseridLinkPathParams extends SpeakeasyBase {
    userId: string;
}
export declare enum PostUsersUseridLinkRequestBodyVendorEnum {
    Tesla = "TESLA",
    Bmw = "BMW",
    Audi = "AUDI",
    Volkswagen = "VOLKSWAGEN",
    Hyundai = "HYUNDAI",
    Peugeot = "PEUGEOT",
    Nissan = "NISSAN"
}
export declare class PostUsersUseridLinkRequestBody extends SpeakeasyBase {
    forceLanguage?: string;
    linkMultiple?: boolean;
    userImage?: string;
    userName?: string;
    vendor?: PostUsersUseridLinkRequestBodyVendorEnum;
}
export declare class PostUsersUseridLinkSecurity extends SpeakeasyBase {
    clientAccessToken: shared.SchemeClientAccessToken;
}
export declare class PostUsersUseridLink200ApplicationJson extends SpeakeasyBase {
    linkState?: string;
}
export declare class PostUsersUseridLinkRequest extends SpeakeasyBase {
    pathParams: PostUsersUseridLinkPathParams;
    request?: PostUsersUseridLinkRequestBody;
    security: PostUsersUseridLinkSecurity;
}
export declare class PostUsersUseridLinkResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    postUsersUseridLink200ApplicationJSONObject?: PostUsersUseridLink200ApplicationJson;
}
