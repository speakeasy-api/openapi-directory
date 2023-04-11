import { SpeakeasyBase } from "../../../internal/utils";
import { TrafficSourceIdentifier } from "./trafficsourceidentifier";
export declare class AttachTrafficSourcesType extends SpeakeasyBase {
    autoScalingGroupName: string;
    trafficSources: TrafficSourceIdentifier[];
}
