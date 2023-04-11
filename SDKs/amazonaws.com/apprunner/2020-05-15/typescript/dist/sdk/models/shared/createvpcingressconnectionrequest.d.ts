import { SpeakeasyBase } from "../../../internal/utils";
import { IngressVpcConfiguration } from "./ingressvpcconfiguration";
import { Tag } from "./tag";
export declare class CreateVpcIngressConnectionRequest extends SpeakeasyBase {
    ingressVpcConfiguration: IngressVpcConfiguration;
    serviceArn: string;
    tags?: Tag[];
    vpcIngressConnectionName: string;
}
