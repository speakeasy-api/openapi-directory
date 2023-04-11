import { SpeakeasyBase } from "../../../internal/utils";
import { RuntimeEnum } from "./runtimeenum";
/**
 * The AWS Lambda function metadata.
 */
export declare class LambdaFunctionMetadata extends SpeakeasyBase {
    functionName?: string;
    functionTags?: Record<string, string>;
    layers?: string[];
    runtime?: RuntimeEnum;
}
