import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostCharginglocationsRequestBodyInput extends SpeakeasyBase {
    latitude?: number;
    longitude?: number;
    name?: string;
}
export declare class PostCharginglocationsSecurity extends SpeakeasyBase {
    userAccessToken?: shared.SchemeUserAccessToken;
    userAccessToken1?: shared.SchemeUserAccessToken;
}
export declare class PostCharginglocationsRequest extends SpeakeasyBase {
    request?: PostCharginglocationsRequestBodyInput;
    security: PostCharginglocationsSecurity;
}
export declare class PostCharginglocationsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    onechargingLocationsPostRequestBodyContentApplication1jsonSchema?: shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema;
}
