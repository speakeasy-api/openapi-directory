import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigCapabilityTypeEnum } from "./configcapabilitytypeenum";
import { ConfigDetails } from "./configdetails";
/**
 * Dataflow details for the source side.
 */
export declare class Source extends SpeakeasyBase {
    configDetails?: ConfigDetails;
    configId?: string;
    configType?: ConfigCapabilityTypeEnum;
    dataflowSourceRegion?: string;
}
