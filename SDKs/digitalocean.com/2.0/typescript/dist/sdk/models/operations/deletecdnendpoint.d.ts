import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteCdnEndpointPathParams extends SpeakeasyBase {
    cdnId: string;
}
export declare class DeleteCdnEndpoint401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class DeleteCdnEndpointRequest extends SpeakeasyBase {
    pathParams: DeleteCdnEndpointPathParams;
}
export declare class DeleteCdnEndpointResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    deleteCdnEndpoint401ApplicationJSONObject?: DeleteCdnEndpoint401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
