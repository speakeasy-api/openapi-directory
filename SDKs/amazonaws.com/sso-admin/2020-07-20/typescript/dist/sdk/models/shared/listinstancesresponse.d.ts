import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceMetadata } from "./instancemetadata";
/**
 * Success
 */
export declare class ListInstancesResponse extends SpeakeasyBase {
    instances?: InstanceMetadata[];
    nextToken?: string;
}
