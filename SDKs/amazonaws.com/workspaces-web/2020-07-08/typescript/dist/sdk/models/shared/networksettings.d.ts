import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A network settings resource that can be associated with a web portal. Once associated with a web portal, network settings define how streaming instances will connect with your specified VPC.
 */
export declare class NetworkSettings extends SpeakeasyBase {
    associatedPortalArns?: string[];
    networkSettingsArn: string;
    securityGroupIds?: string[];
    subnetIds?: string[];
    vpcId?: string;
}
