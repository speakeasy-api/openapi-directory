import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateEndpointAccessMessage extends SpeakeasyBase {
    clusterIdentifier?: string;
    endpointName: string;
    resourceOwner?: string;
    subnetGroupName: string;
    vpcSecurityGroupIds?: string[];
}
