import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateCdnEndpointPathParams extends SpeakeasyBase {
    cdnId: string;
}
export declare class UpdateCdnEndpointRequestBody extends SpeakeasyBase {
    certificateId?: string;
    customDomain?: string;
    ttl?: number;
}
export declare class UpdateCdnEndpoint401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateCdnEndpointRequest extends SpeakeasyBase {
    pathParams: UpdateCdnEndpointPathParams;
    request: UpdateCdnEndpointRequestBody;
}
export declare class UpdateCdnEndpointResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateCdnEndpoint202ApplicationJSONAny?: any;
    updateCdnEndpoint401ApplicationJSONObject?: UpdateCdnEndpoint401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
