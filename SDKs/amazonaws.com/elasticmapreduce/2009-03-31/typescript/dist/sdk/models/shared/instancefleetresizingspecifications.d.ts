import { SpeakeasyBase } from "../../../internal/utils";
import { OnDemandResizingSpecification } from "./ondemandresizingspecification";
import { SpotResizingSpecification } from "./spotresizingspecification";
/**
 * The resize specification for On-Demand and Spot Instances in the fleet.
 */
export declare class InstanceFleetResizingSpecifications extends SpeakeasyBase {
    onDemandResizeSpecification?: OnDemandResizingSpecification;
    spotResizeSpecification?: SpotResizingSpecification;
}
