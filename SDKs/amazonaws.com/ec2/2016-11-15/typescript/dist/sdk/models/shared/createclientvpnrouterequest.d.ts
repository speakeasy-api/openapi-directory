import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateClientVpnRouteRequest extends SpeakeasyBase {
    clientToken?: string;
    clientVpnEndpointId: string;
    description?: string;
    destinationCidrBlock: string;
    dryRun?: boolean;
    targetVpcSubnetId: string;
}
