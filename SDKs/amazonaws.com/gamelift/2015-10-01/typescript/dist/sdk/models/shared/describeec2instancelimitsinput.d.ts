import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
export declare class DescribeEc2InstanceLimitsInput extends SpeakeasyBase {
    ec2InstanceType?: Ec2InstanceTypeEnum;
    location?: string;
}
