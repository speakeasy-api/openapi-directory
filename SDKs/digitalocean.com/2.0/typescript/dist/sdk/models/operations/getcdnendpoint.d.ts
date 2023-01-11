import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetCdnEndpointPathParams extends SpeakeasyBase {
    cdnId: string;
}
export declare class GetCdnEndpoint401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class GetCdnEndpointRequest extends SpeakeasyBase {
    pathParams: GetCdnEndpointPathParams;
}
export declare class GetCdnEndpointResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    getCdnEndpoint200ApplicationJSONAny?: any;
    getCdnEndpoint401ApplicationJSONObject?: GetCdnEndpoint401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
