import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";
import { InstanceFleetResizingSpecifications } from "./instancefleetresizingspecifications";
import { InstanceFleetStatus } from "./instancefleetstatus";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeSpecification } from "./instancetypespecification";
/**
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity. </p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export declare class InstanceFleet extends SpeakeasyBase {
    id?: string;
    instanceFleetType?: InstanceFleetTypeEnum;
    instanceTypeSpecifications?: InstanceTypeSpecification[];
    launchSpecifications?: InstanceFleetProvisioningSpecifications;
    name?: string;
    provisionedOnDemandCapacity?: number;
    provisionedSpotCapacity?: number;
    resizeSpecifications?: InstanceFleetResizingSpecifications;
    status?: InstanceFleetStatus;
    targetOnDemandCapacity?: number;
    targetSpotCapacity?: number;
}
