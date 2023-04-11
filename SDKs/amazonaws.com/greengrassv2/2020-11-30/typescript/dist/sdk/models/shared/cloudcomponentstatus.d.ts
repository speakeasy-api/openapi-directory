import { SpeakeasyBase } from "../../../internal/utils";
import { CloudComponentStateEnum } from "./cloudcomponentstateenum";
import { VendorGuidanceEnum } from "./vendorguidanceenum";
/**
 * Contains the status of a component version in the IoT Greengrass service.
 */
export declare class CloudComponentStatus extends SpeakeasyBase {
    componentState?: CloudComponentStateEnum;
    errors?: Record<string, string>;
    message?: string;
    vendorGuidance?: VendorGuidanceEnum;
    vendorGuidanceMessage?: string;
}
