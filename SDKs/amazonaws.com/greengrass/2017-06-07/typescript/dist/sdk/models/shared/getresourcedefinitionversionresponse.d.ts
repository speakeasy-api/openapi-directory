import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceDefinitionVersion } from "./resourcedefinitionversion";
/**
 * Success
 */
export declare class GetResourceDefinitionVersionResponse extends SpeakeasyBase {
    arn?: string;
    creationTimestamp?: string;
    definition?: ResourceDefinitionVersion;
    id?: string;
    version?: string;
}
