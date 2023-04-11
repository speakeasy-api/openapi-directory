import { SpeakeasyBase } from "../../../internal/utils";
export declare class AssociateRouteTableRequest extends SpeakeasyBase {
    dryRun?: boolean;
    gatewayId?: string;
    routeTableId: string;
    subnetId?: string;
}
