import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDeploymentXAmzTargetEnum {
    CodeDeploy20141006CreateDeployment = "CodeDeploy_20141006.CreateDeployment"
}
export declare class CreateDeploymentRequest extends SpeakeasyBase {
    createDeploymentInput: shared.CreateDeploymentInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentXAmzTargetEnum;
}
export declare class CreateDeploymentResponse extends SpeakeasyBase {
    /**
     * AlarmsLimitExceededException
     */
    alarmsLimitExceededException?: any;
    /**
     * ApplicationDoesNotExistException
     */
    applicationDoesNotExistException?: any;
    /**
     * ApplicationNameRequiredException
     */
    applicationNameRequiredException?: any;
    contentType: string;
    /**
     * Success
     */
    createDeploymentOutput?: shared.CreateDeploymentOutput;
    /**
     * DeploymentConfigDoesNotExistException
     */
    deploymentConfigDoesNotExistException?: any;
    /**
     * DeploymentGroupDoesNotExistException
     */
    deploymentGroupDoesNotExistException?: any;
    /**
     * DeploymentGroupNameRequiredException
     */
    deploymentGroupNameRequiredException?: any;
    /**
     * DeploymentLimitExceededException
     */
    deploymentLimitExceededException?: any;
    /**
     * DescriptionTooLongException
     */
    descriptionTooLongException?: any;
    /**
     * InvalidAlarmConfigException
     */
    invalidAlarmConfigException?: any;
    /**
     * InvalidApplicationNameException
     */
    invalidApplicationNameException?: any;
    /**
     * InvalidAutoRollbackConfigException
     */
    invalidAutoRollbackConfigException?: any;
    /**
     * InvalidAutoScalingGroupException
     */
    invalidAutoScalingGroupException?: any;
    /**
     * InvalidDeploymentConfigNameException
     */
    invalidDeploymentConfigNameException?: any;
    /**
     * InvalidDeploymentGroupNameException
     */
    invalidDeploymentGroupNameException?: any;
    /**
     * InvalidFileExistsBehaviorException
     */
    invalidFileExistsBehaviorException?: any;
    /**
     * InvalidGitHubAccountTokenException
     */
    invalidGitHubAccountTokenException?: any;
    /**
     * InvalidIgnoreApplicationStopFailuresValueException
     */
    invalidIgnoreApplicationStopFailuresValueException?: any;
    /**
     * InvalidLoadBalancerInfoException
     */
    invalidLoadBalancerInfoException?: any;
    /**
     * InvalidRevisionException
     */
    invalidRevisionException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * InvalidTargetInstancesException
     */
    invalidTargetInstancesException?: any;
    /**
     * InvalidTrafficRoutingConfigurationException
     */
    invalidTrafficRoutingConfigurationException?: any;
    /**
     * InvalidUpdateOutdatedInstancesOnlyValueException
     */
    invalidUpdateOutdatedInstancesOnlyValueException?: any;
    /**
     * RevisionDoesNotExistException
     */
    revisionDoesNotExistException?: any;
    /**
     * RevisionRequiredException
     */
    revisionRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
}
