import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RunClusterlintPathParams extends SpeakeasyBase {
    clusterId: string;
}
export declare class RunClusterlintRequestBody extends SpeakeasyBase {
    excludeChecks?: string[];
    excludeGroups?: string[];
    includeChecks?: string[];
    includeGroups?: string[];
}
export declare class RunClusterlint401ApplicationJson extends SpeakeasyBase {
    id: string;
    message: string;
    requestId?: string;
}
export declare class RunClusterlintRequest extends SpeakeasyBase {
    pathParams: RunClusterlintPathParams;
    request?: RunClusterlintRequestBody;
}
export declare class RunClusterlintResponse extends SpeakeasyBase {
    contentType: string;
    headers: Record<string, string[]>;
    statusCode: number;
    runClusterlint202ApplicationJSONAny?: any;
    runClusterlint401ApplicationJSONObject?: RunClusterlint401ApplicationJson;
    onev211ClicksGetResponses401ContentApplication1jsonSchema?: shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema;
}
