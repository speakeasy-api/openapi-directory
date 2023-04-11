import { SpeakeasyBase } from "../../../internal/utils";
import { ConfigParameter } from "./configparameter";
import { Tag } from "./tag";
export declare class CreateWorkgroupRequest extends SpeakeasyBase {
    baseCapacity?: number;
    configParameters?: ConfigParameter[];
    enhancedVpcRouting?: boolean;
    namespaceName: string;
    port?: number;
    publiclyAccessible?: boolean;
    securityGroupIds?: string[];
    subnetIds?: string[];
    tags?: Tag[];
    workgroupName: string;
}
