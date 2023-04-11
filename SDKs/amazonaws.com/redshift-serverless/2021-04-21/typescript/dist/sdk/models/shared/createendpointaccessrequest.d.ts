import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEndpointAccessRequest extends SpeakeasyBase {
    endpointName: string;
    subnetIds: string[];
    vpcSecurityGroupIds?: string[];
    workgroupName: string;
}
