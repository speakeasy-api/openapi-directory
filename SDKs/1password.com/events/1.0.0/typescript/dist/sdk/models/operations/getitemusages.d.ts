import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetItemUsagesSecurity extends SpeakeasyBase {
    jwtsa: shared.SchemeJwtsa;
}
export declare class GetItemUsagesRequest extends SpeakeasyBase {
    request?: any;
    security: GetItemUsagesSecurity;
}
export declare class GetItemUsagesResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    getItemUsages200ApplicationJSONAny?: any;
}
