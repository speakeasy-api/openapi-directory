import { SpeakeasyBase } from "../../../internal/utils";
import { InstanceRequirements } from "./instancerequirements";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
/**
 * <p>Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:</p> <ul> <li> <p>Override the instance type that is specified in the launch template.</p> </li> <li> <p>Use multiple instance types.</p> </li> </ul> <p>Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.</p> <p>After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.</p>
 */
export declare class LaunchTemplateOverrides extends SpeakeasyBase {
    instanceRequirements?: InstanceRequirements;
    instanceType?: string;
    launchTemplateSpecification?: LaunchTemplateSpecification;
    weightedCapacity?: string;
}
