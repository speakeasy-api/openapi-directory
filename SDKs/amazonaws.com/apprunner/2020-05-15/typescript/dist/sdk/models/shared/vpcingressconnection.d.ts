import { SpeakeasyBase } from "../../../internal/utils";
import { IngressVpcConfiguration } from "./ingressvpcconfiguration";
import { VpcIngressConnectionStatusEnum } from "./vpcingressconnectionstatusenum";
/**
 * The App Runner resource that specifies an App Runner endpoint for incoming traffic. It establishes a connection between a VPC interface endpoint and a App Runner service, to make your App Runner service accessible from only within an Amazon VPC.
 */
export declare class VpcIngressConnection extends SpeakeasyBase {
    accountId?: string;
    createdAt?: Date;
    deletedAt?: Date;
    domainName?: string;
    ingressVpcConfiguration?: IngressVpcConfiguration;
    serviceArn?: string;
    status?: VpcIngressConnectionStatusEnum;
    vpcIngressConnectionArn?: string;
    vpcIngressConnectionName?: string;
}
