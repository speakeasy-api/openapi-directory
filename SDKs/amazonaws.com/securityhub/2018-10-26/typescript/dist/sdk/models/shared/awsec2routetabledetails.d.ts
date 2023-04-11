import { SpeakeasyBase } from "../../../internal/utils";
import { AssociationSetDetails } from "./associationsetdetails";
import { PropagatingVgwSetDetails } from "./propagatingvgwsetdetails";
import { RouteSetDetails } from "./routesetdetails";
/**
 *  Provides details about a route table for the specified VPC.
 */
export declare class AwsEc2RouteTableDetails extends SpeakeasyBase {
    associationSet?: AssociationSetDetails[];
    ownerId?: string;
    propagatingVgwSet?: PropagatingVgwSetDetails[];
    routeSet?: RouteSetDetails[];
    routeTableId?: string;
    vpcId?: string;
}
