import { SpeakeasyBase } from "../../../internal/utils";
import { StatusEnum } from "./statusenum";
/**
 * Details the status of Amazon Inspector for each resource type Amazon Inspector scans.
 */
export declare class ResourceStatus extends SpeakeasyBase {
    ec2: StatusEnum;
    ecr: StatusEnum;
    lambda?: StatusEnum;
}
