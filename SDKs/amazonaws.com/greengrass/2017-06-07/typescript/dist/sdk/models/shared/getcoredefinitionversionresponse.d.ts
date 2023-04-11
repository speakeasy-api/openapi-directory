import { SpeakeasyBase } from "../../../internal/utils";
import { CoreDefinitionVersion } from "./coredefinitionversion";
/**
 * Success
 */
export declare class GetCoreDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: CoreDefinitionVersion;
    id?: string;
    nextToken?: string;
    version?: string;
}
