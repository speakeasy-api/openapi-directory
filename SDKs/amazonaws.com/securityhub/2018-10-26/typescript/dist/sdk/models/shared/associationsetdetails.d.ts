import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationStateDetails } from "./associationstatedetails";
/**
 *  The associations between a route table and one or more subnets or a gateway.
 */
export declare class AssociationSetDetails extends SpeakeasyBase {
    associationState?: AssociationStateDetails;
    gatewayId?: string;
    main?: boolean;
    routeTableAssociationId?: string;
    routeTableId?: string;
    subnetId?: string;
}
