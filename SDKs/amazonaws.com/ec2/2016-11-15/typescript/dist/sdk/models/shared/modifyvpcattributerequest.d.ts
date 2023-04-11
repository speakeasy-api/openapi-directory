import { SpeakeasyBase } from "../../../internal/utils";
import { AttributeBooleanValue } from "./attributebooleanvalue";
export declare class ModifyVpcAttributeRequest extends SpeakeasyBase {
    enableDnsHostnames?: AttributeBooleanValue;
    enableDnsSupport?: AttributeBooleanValue;
    enableNetworkAddressUsageMetrics?: AttributeBooleanValue;
    vpcId: string;
}
