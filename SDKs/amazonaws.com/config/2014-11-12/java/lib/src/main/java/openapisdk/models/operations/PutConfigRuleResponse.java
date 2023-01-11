package openapisdk.models.operations;



public class PutConfigRuleResponse {
    public String contentType;
    public PutConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutConfigRuleResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutConfigRuleResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object maxNumberOfConfigRulesExceededException;
    public PutConfigRuleResponse withMaxNumberOfConfigRulesExceededException(Object maxNumberOfConfigRulesExceededException) {
        this.maxNumberOfConfigRulesExceededException = maxNumberOfConfigRulesExceededException;
        return this;
    }
    public Object noAvailableConfigurationRecorderException;
    public PutConfigRuleResponse withNoAvailableConfigurationRecorderException(Object noAvailableConfigurationRecorderException) {
        this.noAvailableConfigurationRecorderException = noAvailableConfigurationRecorderException;
        return this;
    }
    public Object resourceInUseException;
    public PutConfigRuleResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public PutConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}