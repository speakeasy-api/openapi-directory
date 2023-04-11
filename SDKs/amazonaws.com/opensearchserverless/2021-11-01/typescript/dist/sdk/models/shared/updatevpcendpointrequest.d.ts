import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateVpcEndpointRequest extends SpeakeasyBase {
    addSecurityGroupIds?: string[];
    addSubnetIds?: string[];
    clientToken?: string;
    id: string;
    removeSecurityGroupIds?: string[];
    removeSubnetIds?: string[];
}
