import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDomain } from "./customdomain";
import { VpcDNSTarget } from "./vpcdnstarget";
/**
 * Success
 */
export declare class DisassociateCustomDomainResponse extends SpeakeasyBase {
    customDomain: CustomDomain;
    dnsTarget: string;
    serviceArn: string;
    vpcDNSTargets: VpcDNSTarget[];
}
