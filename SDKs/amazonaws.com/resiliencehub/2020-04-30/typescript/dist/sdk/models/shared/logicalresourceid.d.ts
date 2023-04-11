import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Defines a logical resource identifier.
 */
export declare class LogicalResourceId extends SpeakeasyBase {
    eksSourceName?: string;
    identifier: string;
    logicalStackName?: string;
    resourceGroupName?: string;
    terraformSourceName?: string;
}
