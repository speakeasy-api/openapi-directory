import { SpeakeasyBase } from "../../../internal/utils";
import { VendorGuidanceEnum } from "./vendorguidanceenum";
/**
 * Contains information about a component version that is compatible to run on a Greengrass core device.
 */
export declare class ResolvedComponentVersion extends SpeakeasyBase {
    arn?: string;
    componentName?: string;
    componentVersion?: string;
    message?: string;
    recipe?: string;
    vendorGuidance?: VendorGuidanceEnum;
}
