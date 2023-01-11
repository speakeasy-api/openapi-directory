import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateEvictionPolicyPathParams extends SpeakeasyBase {
    databaseClusterUuid: string;
}
export declare class UpdateEvictionPolicy401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class UpdateEvictionPolicyRequest extends SpeakeasyBase {
    pathParams: UpdateEvictionPolicyPathParams;
    request: shared.Onev21databases1Percent7BdatabaseClusterUuidPercent7D1evictionPolicyGetResponses200ContentApplication1jsonSchema;
}
export declare class UpdateEvictionPolicyResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    updateEvictionPolicy401ApplicationJSONObject?: UpdateEvictionPolicy401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
