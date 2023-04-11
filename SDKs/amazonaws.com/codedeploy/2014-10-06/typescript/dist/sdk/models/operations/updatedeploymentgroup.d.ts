import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDeploymentGroupXAmzTargetEnum {
    CodeDeploy20141006UpdateDeploymentGroup = "CodeDeploy_20141006.UpdateDeploymentGroup"
}
export declare class UpdateDeploymentGroupRequest extends SpeakeasyBase {
    updateDeploymentGroupInput: shared.UpdateDeploymentGroupInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDeploymentGroupXAmzTargetEnum;
}
export declare class UpdateDeploymentGroupResponse extends SpeakeasyBase {
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
     * DeploymentConfigDoesNotExistException
     */
    deploymentConfigDoesNotExistException?: any;
    /**
     * DeploymentGroupAlreadyExistsException
     */
    deploymentGroupAlreadyExistsException?: any;
    /**
     * DeploymentGroupDoesNotExistException
     */
    deploymentGroupDoesNotExistException?: any;
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
    /**
     * Success
     */
    updateDeploymentGroupOutput?: shared.UpdateDeploymentGroupOutput;
}
