import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>A complex structure for a managed resource in an account.</p> <p>A managed resource is a Network Load Balancer or Application Load Balancer that has been registered with Route 53 ARC by Elastic Load Balancing. You can start a zonal shift in Route 53 ARC for a managed resource to temporarily move traffic for the resource away from an Availability Zone in an AWS Region.</p> <note> <p>At this time, you can only start a zonal shift for Network Load Balancers and Application Load Balancers with cross-zone load balancing turned off.</p> </note>
 */
export declare class ManagedResourceSummary extends SpeakeasyBase {
    arn?: string;
    availabilityZones: string[];
    name?: string;
}
