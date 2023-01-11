package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public Object applicationDoesNotExistException;
    public CreateDeploymentResponse withApplicationDoesNotExistException(Object applicationDoesNotExistException) {
        this.applicationDoesNotExistException = applicationDoesNotExistException;
        return this;
    }
    public Object applicationNameRequiredException;
    public CreateDeploymentResponse withApplicationNameRequiredException(Object applicationNameRequiredException) {
        this.applicationNameRequiredException = applicationNameRequiredException;
        return this;
    }
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentOutput createDeploymentOutput;
    public CreateDeploymentResponse withCreateDeploymentOutput(openapisdk.models.shared.CreateDeploymentOutput createDeploymentOutput) {
        this.createDeploymentOutput = createDeploymentOutput;
        return this;
    }
    public Object deploymentConfigDoesNotExistException;
    public CreateDeploymentResponse withDeploymentConfigDoesNotExistException(Object deploymentConfigDoesNotExistException) {
        this.deploymentConfigDoesNotExistException = deploymentConfigDoesNotExistException;
        return this;
    }
    public Object deploymentGroupDoesNotExistException;
    public CreateDeploymentResponse withDeploymentGroupDoesNotExistException(Object deploymentGroupDoesNotExistException) {
        this.deploymentGroupDoesNotExistException = deploymentGroupDoesNotExistException;
        return this;
    }
    public Object deploymentGroupNameRequiredException;
    public CreateDeploymentResponse withDeploymentGroupNameRequiredException(Object deploymentGroupNameRequiredException) {
        this.deploymentGroupNameRequiredException = deploymentGroupNameRequiredException;
        return this;
    }
    public Object deploymentLimitExceededException;
    public CreateDeploymentResponse withDeploymentLimitExceededException(Object deploymentLimitExceededException) {
        this.deploymentLimitExceededException = deploymentLimitExceededException;
        return this;
    }
    public Object descriptionTooLongException;
    public CreateDeploymentResponse withDescriptionTooLongException(Object descriptionTooLongException) {
        this.descriptionTooLongException = descriptionTooLongException;
        return this;
    }
    public Object invalidApplicationNameException;
    public CreateDeploymentResponse withInvalidApplicationNameException(Object invalidApplicationNameException) {
        this.invalidApplicationNameException = invalidApplicationNameException;
        return this;
    }
    public Object invalidAutoRollbackConfigException;
    public CreateDeploymentResponse withInvalidAutoRollbackConfigException(Object invalidAutoRollbackConfigException) {
        this.invalidAutoRollbackConfigException = invalidAutoRollbackConfigException;
        return this;
    }
    public Object invalidAutoScalingGroupException;
    public CreateDeploymentResponse withInvalidAutoScalingGroupException(Object invalidAutoScalingGroupException) {
        this.invalidAutoScalingGroupException = invalidAutoScalingGroupException;
        return this;
    }
    public Object invalidDeploymentConfigNameException;
    public CreateDeploymentResponse withInvalidDeploymentConfigNameException(Object invalidDeploymentConfigNameException) {
        this.invalidDeploymentConfigNameException = invalidDeploymentConfigNameException;
        return this;
    }
    public Object invalidDeploymentGroupNameException;
    public CreateDeploymentResponse withInvalidDeploymentGroupNameException(Object invalidDeploymentGroupNameException) {
        this.invalidDeploymentGroupNameException = invalidDeploymentGroupNameException;
        return this;
    }
    public Object invalidFileExistsBehaviorException;
    public CreateDeploymentResponse withInvalidFileExistsBehaviorException(Object invalidFileExistsBehaviorException) {
        this.invalidFileExistsBehaviorException = invalidFileExistsBehaviorException;
        return this;
    }
    public Object invalidGitHubAccountTokenException;
    public CreateDeploymentResponse withInvalidGitHubAccountTokenException(Object invalidGitHubAccountTokenException) {
        this.invalidGitHubAccountTokenException = invalidGitHubAccountTokenException;
        return this;
    }
    public Object invalidIgnoreApplicationStopFailuresValueException;
    public CreateDeploymentResponse withInvalidIgnoreApplicationStopFailuresValueException(Object invalidIgnoreApplicationStopFailuresValueException) {
        this.invalidIgnoreApplicationStopFailuresValueException = invalidIgnoreApplicationStopFailuresValueException;
        return this;
    }
    public Object invalidLoadBalancerInfoException;
    public CreateDeploymentResponse withInvalidLoadBalancerInfoException(Object invalidLoadBalancerInfoException) {
        this.invalidLoadBalancerInfoException = invalidLoadBalancerInfoException;
        return this;
    }
    public Object invalidRevisionException;
    public CreateDeploymentResponse withInvalidRevisionException(Object invalidRevisionException) {
        this.invalidRevisionException = invalidRevisionException;
        return this;
    }
    public Object invalidRoleException;
    public CreateDeploymentResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object invalidTargetInstancesException;
    public CreateDeploymentResponse withInvalidTargetInstancesException(Object invalidTargetInstancesException) {
        this.invalidTargetInstancesException = invalidTargetInstancesException;
        return this;
    }
    public Object invalidTrafficRoutingConfigurationException;
    public CreateDeploymentResponse withInvalidTrafficRoutingConfigurationException(Object invalidTrafficRoutingConfigurationException) {
        this.invalidTrafficRoutingConfigurationException = invalidTrafficRoutingConfigurationException;
        return this;
    }
    public Object invalidUpdateOutdatedInstancesOnlyValueException;
    public CreateDeploymentResponse withInvalidUpdateOutdatedInstancesOnlyValueException(Object invalidUpdateOutdatedInstancesOnlyValueException) {
        this.invalidUpdateOutdatedInstancesOnlyValueException = invalidUpdateOutdatedInstancesOnlyValueException;
        return this;
    }
    public Object revisionDoesNotExistException;
    public CreateDeploymentResponse withRevisionDoesNotExistException(Object revisionDoesNotExistException) {
        this.revisionDoesNotExistException = revisionDoesNotExistException;
        return this;
    }
    public Object revisionRequiredException;
    public CreateDeploymentResponse withRevisionRequiredException(Object revisionRequiredException) {
        this.revisionRequiredException = revisionRequiredException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDeploymentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}