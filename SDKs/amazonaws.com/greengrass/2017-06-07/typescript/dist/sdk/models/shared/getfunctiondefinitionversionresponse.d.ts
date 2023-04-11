import { SpeakeasyBase } from "../../../internal/utils";
import { FunctionDefinitionVersion } from "./functiondefinitionversion";
/**
 * Success
 */
export declare class GetFunctionDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: FunctionDefinitionVersion;
    id?: string;
    nextToken?: string;
    version?: string;
}
