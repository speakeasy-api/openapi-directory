import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMeSecurity extends SpeakeasyBase {
    userAccessToken: shared.SchemeUserAccessToken;
}
export declare class GetMe200ApplicationJsonLinkedVendors extends SpeakeasyBase {
    isValid?: boolean;
    vendor?: shared.Oneme1vendors1Percent7BvendorPercent7DDeleteParameters0SchemaEnum;
}
export declare class GetMe200ApplicationJson extends SpeakeasyBase {
    id?: string;
    linkedVendors?: GetMe200ApplicationJsonLinkedVendors[];
}
export declare class GetMeRequest extends SpeakeasyBase {
    security: GetMeSecurity;
}
export declare class GetMeResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getMe200ApplicationJSONObject?: GetMe200ApplicationJson;
}
