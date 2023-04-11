import { SpeakeasyBase } from "../../../internal/utils";
import { CRAllocationStrategyEnum } from "./crallocationstrategyenum";
import { CRTypeEnum } from "./crtypeenum";
import { Ec2Configuration } from "./ec2configuration";
import { LaunchTemplateSpecification } from "./launchtemplatespecification";
/**
 * An object that represents an Batch compute resource. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/compute_environments.html">Compute environments</a> in the <i>Batch User Guide</i>.
 */
export declare class ComputeResource extends SpeakeasyBase {
    allocationStrategy?: CRAllocationStrategyEnum;
    bidPercentage?: number;
    desiredvCpus?: number;
    ec2Configuration?: Ec2Configuration[];
    ec2KeyPair?: string;
    imageId?: string;
    instanceRole?: string;
    instanceTypes?: string[];
    launchTemplate?: LaunchTemplateSpecification;
    maxvCpus: number;
    minvCpus?: number;
    placementGroup?: string;
    securityGroupIds?: string[];
    spotIamFleetRole?: string;
    subnets: string[];
    tags?: Record<string, string>;
    type: CRTypeEnum;
}
