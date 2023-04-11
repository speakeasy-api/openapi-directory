import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceFleetProvisioningSpecifications } from "./instancefleetprovisioningspecifications";
import { InstanceFleetResizingSpecifications } from "./instancefleetresizingspecifications";
import { InstanceFleetTypeEnum } from "./instancefleettypeenum";
import { InstanceTypeConfig } from "./instancetypeconfig";
/**
 * <p>The configuration that defines an instance fleet.</p> <note> <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and later, excluding 5.0.x versions.</p> </note>
 */
export declare class InstanceFleetConfig extends SpeakeasyBase {
    instanceFleetType: InstanceFleetTypeEnum;
    instanceTypeConfigs?: InstanceTypeConfig[];
    launchSpecifications?: InstanceFleetProvisioningSpecifications;
    name?: string;
    resizeSpecifications?: InstanceFleetResizingSpecifications;
    targetOnDemandCapacity?: number;
    targetSpotCapacity?: number;
}
