import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetV4LayersAsAppliedActivityIdContentsPathParams extends SpeakeasyBase {
    activityId: string;
}
export declare class GetV4LayersAsAppliedActivityIdContentsHeaders extends SpeakeasyBase {
    accept: string;
    range: string;
}
export declare class GetV4LayersAsAppliedActivityIdContentsSecurity extends SpeakeasyBase {
    apiKey?: shared.SchemeApiKey;
    oauth2AuthorizationCode?: shared.SchemeOauth2AuthorizationCode;
}
export declare class GetV4LayersAsAppliedActivityIdContentsRequest extends SpeakeasyBase {
    pathParams: GetV4LayersAsAppliedActivityIdContentsPathParams;
    headers: GetV4LayersAsAppliedActivityIdContentsHeaders;
    security: GetV4LayersAsAppliedActivityIdContentsSecurity;
}
export declare class GetV4LayersAsAppliedActivityIdContentsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    empty?: Record<string, any>;
    error?: shared.ErrorT;
    headers: Record<string, string[]>;
    statusCode: number;
}
