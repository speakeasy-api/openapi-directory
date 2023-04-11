import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceCounts } from "./ec2instancecounts";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
/**
 * <p>Current resource capacity settings in a specified fleet or location. The location value might refer to a fleet's remote location or its home Region. </p> <p> <b>Related actions</b> </p> <p> <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetCapacity.html">DescribeFleetCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_DescribeFleetLocationCapacity.html">DescribeFleetLocationCapacity</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/apireference/API_UpdateFleetCapacity.html">UpdateFleetCapacity</a> </p>
 */
export declare class FleetCapacity extends SpeakeasyBase {
    fleetArn?: string;
    fleetId?: string;
    /**
     * Resource capacity settings. Fleet capacity is measured in Amazon EC2 instances. Pending and terminating counts are non-zero when the fleet capacity is adjusting to a scaling event or if access to resources is temporarily affected.
     */
    instanceCounts?: Ec2InstanceCounts;
    instanceType?: Ec2InstanceTypeEnum;
    location?: string;
}
