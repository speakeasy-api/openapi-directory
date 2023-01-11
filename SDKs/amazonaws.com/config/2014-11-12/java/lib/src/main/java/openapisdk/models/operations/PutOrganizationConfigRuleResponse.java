package openapisdk.models.operations;



public class PutOrganizationConfigRuleResponse {
    public String contentType;
    public PutOrganizationConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutOrganizationConfigRuleResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object invalidParameterValueException;
    public PutOrganizationConfigRuleResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object maxNumberOfOrganizationConfigRulesExceededException;
    public PutOrganizationConfigRuleResponse withMaxNumberOfOrganizationConfigRulesExceededException(Object maxNumberOfOrganizationConfigRulesExceededException) {
        this.maxNumberOfOrganizationConfigRulesExceededException = maxNumberOfOrganizationConfigRulesExceededException;
        return this;
    }
    public Object noAvailableOrganizationException;
    public PutOrganizationConfigRuleResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public PutOrganizationConfigRuleResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Object organizationAllFeaturesNotEnabledException;
    public PutOrganizationConfigRuleResponse withOrganizationAllFeaturesNotEnabledException(Object organizationAllFeaturesNotEnabledException) {
        this.organizationAllFeaturesNotEnabledException = organizationAllFeaturesNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.PutOrganizationConfigRuleResponse putOrganizationConfigRuleResponse;
    public PutOrganizationConfigRuleResponse withPutOrganizationConfigRuleResponse(openapisdk.models.shared.PutOrganizationConfigRuleResponse putOrganizationConfigRuleResponse) {
        this.putOrganizationConfigRuleResponse = putOrganizationConfigRuleResponse;
        return this;
    }
    public Object resourceInUseException;
    public PutOrganizationConfigRuleResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public PutOrganizationConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutOrganizationConfigRuleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}