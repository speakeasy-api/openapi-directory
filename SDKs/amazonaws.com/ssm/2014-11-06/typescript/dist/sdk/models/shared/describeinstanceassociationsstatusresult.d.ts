import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceAssociationStatusInfo } from "./instanceassociationstatusinfo";
/**
 * Success
 */
export declare class DescribeInstanceAssociationsStatusResult extends SpeakeasyBase {
    instanceAssociationStatusInfos?: InstanceAssociationStatusInfo[];
    nextToken?: string;
}
