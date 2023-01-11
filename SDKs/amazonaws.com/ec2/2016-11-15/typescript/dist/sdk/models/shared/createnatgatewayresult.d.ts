import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Reserved. If you need to sustain traffic greater than the <a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-nat-gateway.html">documented limits</a>, contact us through the <a href="https://console.aws.amazon.com/support/home?">Support Center</a>.
**/
export declare class CreateNatGatewayResultNatGatewayProvisionedBandwidth extends SpeakeasyBase {
    provisionTime?: Record<string, any>;
    provisioned?: Record<string, any>;
    requestTime?: Record<string, any>;
    requested?: Record<string, any>;
    status?: Record<string, any>;
}
/**
 * Information about the NAT gateway.
**/
export declare class CreateNatGatewayResultNatGateway extends SpeakeasyBase {
    connectivityType?: Record<string, any>;
    createTime?: Record<string, any>;
    deleteTime?: Record<string, any>;
    failureCode?: Record<string, any>;
    failureMessage?: Record<string, any>;
    natGatewayAddresses?: Record<string, any>;
    natGatewayId?: Record<string, any>;
    provisionedBandwidth?: CreateNatGatewayResultNatGatewayProvisionedBandwidth;
    state?: Record<string, any>;
    subnetId?: Record<string, any>;
    tags?: Record<string, any>;
    vpcId?: Record<string, any>;
}
export declare class CreateNatGatewayResult extends SpeakeasyBase {
    clientToken?: Record<string, any>;
    natGateway?: CreateNatGatewayResultNatGateway;
}
