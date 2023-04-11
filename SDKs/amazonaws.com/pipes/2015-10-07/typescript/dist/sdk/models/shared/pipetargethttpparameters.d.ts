import { SpeakeasyBase } from "../../../internal/utils";
/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations.
 */
export declare class PipeTargetHttpParameters extends SpeakeasyBase {
    headerParameters?: Record<string, string>;
    pathParameterValues?: string[];
    queryStringParameters?: Record<string, string>;
}
