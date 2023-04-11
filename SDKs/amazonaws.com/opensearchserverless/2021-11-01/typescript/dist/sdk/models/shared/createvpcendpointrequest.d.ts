import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateVpcEndpointRequest extends SpeakeasyBase {
    clientToken?: string;
    name: string;
    securityGroupIds?: string[];
    subnetIds: string[];
    vpcId: string;
}
