import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006CreateDeploymentGroup = "CodeDeploy_20141006.CreateDeploymentGroup"
}
export declare class CreateDeploymentGroupRequest extends SpeakeasyBase {
    createDeploymentGroupInput: shared.CreateDeploymentGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDeploymentGroupXAmzTargetEnum;
}
export declare class CreateDeploymentGroupResponse extends SpeakeasyBase {
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
    createDeploymentGroupOutput?: shared.CreateDeploymentGroupOutput;
    /**
     * DeploymentConfigDoesNotExistException
     */
    deploymentConfigDoesNotExistException?: any;
    /**
     * DeploymentGroupAlreadyExistsException
     */
    deploymentGroupAlreadyExistsException?: any;
    /**
     * DeploymentGroupLimitExceededException
     */
    deploymentGroupLimitExceededException?: any;
    /**
     * DeploymentGroupNameRequiredException
     */
    deploymentGroupNameRequiredException?: any;
    /**
     * ECSServiceMappingLimitExceededException
     */
    ecsServiceMappingLimitExceededException?: any;
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
     * InvalidBlueGreenDeploymentConfigurationException
     */
    invalidBlueGreenDeploymentConfigurationException?: any;
    /**
     * InvalidDeploymentConfigNameException
     */
    invalidDeploymentConfigNameException?: any;
    /**
     * InvalidDeploymentGroupNameException
     */
    invalidDeploymentGroupNameException?: any;
    /**
     * InvalidDeploymentStyleException
     */
    invalidDeploymentStyleException?: any;
    /**
     * InvalidEC2TagCombinationException
     */
    invalidEc2TagCombinationException?: any;
    /**
     * InvalidEC2TagException
     */
    invalidEc2TagException?: any;
    /**
     * InvalidECSServiceException
     */
    invalidECSServiceException?: any;
    /**
     * InvalidInputException
     */
    invalidInputException?: any;
    /**
     * InvalidLoadBalancerInfoException
     */
    invalidLoadBalancerInfoException?: any;
    /**
     * InvalidOnPremisesTagCombinationException
     */
    invalidOnPremisesTagCombinationException?: any;
    /**
     * InvalidRoleException
     */
    invalidRoleException?: any;
    /**
     * InvalidTagException
     */
    invalidTagException?: any;
    /**
     * InvalidTagsToAddException
     */
    invalidTagsToAddException?: any;
    /**
     * InvalidTargetGroupPairException
     */
    invalidTargetGroupPairException?: any;
    /**
     * InvalidTrafficRoutingConfigurationException
     */
    invalidTrafficRoutingConfigurationException?: any;
    /**
     * InvalidTriggerConfigException
     */
    invalidTriggerConfigException?: any;
    /**
     * LifecycleHookLimitExceededException
     */
    lifecycleHookLimitExceededException?: any;
    /**
     * RoleRequiredException
     */
    roleRequiredException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TagSetListLimitExceededException
     */
    tagSetListLimitExceededException?: any;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * TriggerTargetsLimitExceededException
     */
    triggerTargetsLimitExceededException?: any;
}
