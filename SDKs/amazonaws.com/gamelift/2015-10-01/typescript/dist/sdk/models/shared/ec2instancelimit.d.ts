import { SpeakeasyBase } from "../../../internal/utils";
import { Ec2InstanceTypeEnum } from "./ec2instancetypeenum";
/**
 * The GameLift service limits for an Amazon EC2 instance type and current utilization. GameLift allows Amazon Web Services accounts a maximum number of instances, per instance type, per Amazon Web Services Region or location, for use with GameLift. You can request an limit increase for your account by using the <b>Service limits</b> page in the GameLift console.
 */
export declare class Ec2InstanceLimit extends SpeakeasyBase {
    currentInstances?: number;
    ec2InstanceType?: Ec2InstanceTypeEnum;
    instanceLimit?: number;
    location?: string;
}
