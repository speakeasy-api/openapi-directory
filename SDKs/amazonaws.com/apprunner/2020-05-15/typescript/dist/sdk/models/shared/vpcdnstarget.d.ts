import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DNS Target record for a custom domain of this Amazon VPC.
 */
export declare class VpcDNSTarget extends SpeakeasyBase {
    domainName?: string;
    vpcId?: string;
    vpcIngressConnectionArn?: string;
}
