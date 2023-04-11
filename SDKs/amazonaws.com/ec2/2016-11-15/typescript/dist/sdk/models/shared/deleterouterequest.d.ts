import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteRouteRequest extends SpeakeasyBase {
    destinationCidrBlock?: string;
    destinationIpv6CidrBlock?: string;
    destinationPrefixListId?: string;
    dryRun?: boolean;
    routeTableId: string;
}
