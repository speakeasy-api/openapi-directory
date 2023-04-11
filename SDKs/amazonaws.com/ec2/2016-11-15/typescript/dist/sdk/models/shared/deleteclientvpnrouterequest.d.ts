import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteClientVpnRouteRequest extends SpeakeasyBase {
    clientVpnEndpointId: string;
    destinationCidrBlock: string;
    dryRun?: boolean;
    targetVpcSubnetId?: string;
}
