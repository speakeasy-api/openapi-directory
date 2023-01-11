package openapisdk.models.operations;



public class CreateDeploymentConfigResponse {
    public String contentType;
    public CreateDeploymentConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentConfigOutput createDeploymentConfigOutput;
    public CreateDeploymentConfigResponse withCreateDeploymentConfigOutput(openapisdk.models.shared.CreateDeploymentConfigOutput createDeploymentConfigOutput) {
        this.createDeploymentConfigOutput = createDeploymentConfigOutput;
        return this;
    }
    public Object deploymentConfigAlreadyExistsException;
    public CreateDeploymentConfigResponse withDeploymentConfigAlreadyExistsException(Object deploymentConfigAlreadyExistsException) {
        this.deploymentConfigAlreadyExistsException = deploymentConfigAlreadyExistsException;
        return this;
    }
    public Object deploymentConfigLimitExceededException;
    public CreateDeploymentConfigResponse withDeploymentConfigLimitExceededException(Object deploymentConfigLimitExceededException) {
        this.deploymentConfigLimitExceededException = deploymentConfigLimitExceededException;
        return this;
    }
    public Object deploymentConfigNameRequiredException;
    public CreateDeploymentConfigResponse withDeploymentConfigNameRequiredException(Object deploymentConfigNameRequiredException) {
        this.deploymentConfigNameRequiredException = deploymentConfigNameRequiredException;
        return this;
    }
    public Object invalidComputePlatformException;
    public CreateDeploymentConfigResponse withInvalidComputePlatformException(Object invalidComputePlatformException) {
        this.invalidComputePlatformException = invalidComputePlatformException;
        return this;
    }
    public Object invalidDeploymentConfigNameException;
    public CreateDeploymentConfigResponse withInvalidDeploymentConfigNameException(Object invalidDeploymentConfigNameException) {
        this.invalidDeploymentConfigNameException = invalidDeploymentConfigNameException;
        return this;
    }
    public Object invalidMinimumHealthyHostValueException;
    public CreateDeploymentConfigResponse withInvalidMinimumHealthyHostValueException(Object invalidMinimumHealthyHostValueException) {
        this.invalidMinimumHealthyHostValueException = invalidMinimumHealthyHostValueException;
        return this;
    }
    public Object invalidTrafficRoutingConfigurationException;
    public CreateDeploymentConfigResponse withInvalidTrafficRoutingConfigurationException(Object invalidTrafficRoutingConfigurationException) {
        this.invalidTrafficRoutingConfigurationException = invalidTrafficRoutingConfigurationException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}