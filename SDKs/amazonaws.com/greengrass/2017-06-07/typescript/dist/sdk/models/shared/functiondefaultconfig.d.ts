import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionDefaultExecutionConfig } from "./functiondefaultexecutionconfig";
/**
 * The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
 */
export declare class FunctionDefaultConfig extends SpeakeasyBase {
    /**
     * Configuration information that specifies how a Lambda function runs.
     */
    execution?: FunctionDefaultExecutionConfig;
}
