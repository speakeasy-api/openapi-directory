import { SpeakeasyBase } from "../../../internal/utils";
import { CustomDomain } from "./customdomain";
import { VpcDNSTarget } from "./vpcdnstarget";
/**
 * Success
 */
export declare class DescribeCustomDomainsResponse extends SpeakeasyBase {
    customDomains: CustomDomain[];
    dnsTarget: string;
    nextToken?: string;
    serviceArn: string;
    vpcDNSTargets: VpcDNSTarget[];
}
