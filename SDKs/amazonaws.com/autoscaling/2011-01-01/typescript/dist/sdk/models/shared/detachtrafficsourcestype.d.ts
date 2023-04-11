import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficSourceIdentifier } from "./trafficsourceidentifier";
export declare class DetachTrafficSourcesType extends SpeakeasyBase {
    autoScalingGroupName: string;
    trafficSources: TrafficSourceIdentifier[];
}
