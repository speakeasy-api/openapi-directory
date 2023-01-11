import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsPlantedActivityIdContentsPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class GetV4LayersAsPlantedActivityIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersAsPlantedActivityIdContentsSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsPlantedActivityIdContentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersAsPlantedActivityIdContentsPathParams;
    headers: GetV4LayersAsPlantedActivityIdContentsHeaders;
    security: GetV4LayersAsPlantedActivityIdContentsSecurity;
}
export declare class GetV4LayersAsPlantedActivityIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    empty?: Record<string, any>;
    error?: shared.ErrorT;
    headers: Record<string, string[]>;
    statusCode: number;
}
