import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigParameter } from "./configparameter";
export declare class UpdateWorkgroupRequest extends SpeakeasyBase {
    baseCapacity?: number;
    configParameters?: ConfigParameter[];
    enhancedVpcRouting?: boolean;
    port?: number;
    publiclyAccessible?: boolean;
    securityGroupIds?: string[];
    subnetIds?: string[];
    workgroupName: string;
}
