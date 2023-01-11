package openapisdk.models.operations;



public class PutConfigurationAggregatorResponse {
    public String contentType;
    public PutConfigurationAggregatorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValueException;
    public PutConfigurationAggregatorResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object invalidRoleException;
    public PutConfigurationAggregatorResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public PutConfigurationAggregatorResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object noAvailableOrganizationException;
    public PutConfigurationAggregatorResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public PutConfigurationAggregatorResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Object organizationAllFeaturesNotEnabledException;
    public PutConfigurationAggregatorResponse withOrganizationAllFeaturesNotEnabledException(Object organizationAllFeaturesNotEnabledException) {
        this.organizationAllFeaturesNotEnabledException = organizationAllFeaturesNotEnabledException;
        return this;
    }
    public openapisdk.models.shared.PutConfigurationAggregatorResponse putConfigurationAggregatorResponse;
    public PutConfigurationAggregatorResponse withPutConfigurationAggregatorResponse(openapisdk.models.shared.PutConfigurationAggregatorResponse putConfigurationAggregatorResponse) {
        this.putConfigurationAggregatorResponse = putConfigurationAggregatorResponse;
        return this;
    }
    public Long statusCode;
    public PutConfigurationAggregatorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}