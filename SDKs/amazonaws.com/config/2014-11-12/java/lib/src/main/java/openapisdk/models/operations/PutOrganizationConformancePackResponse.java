package openapisdk.models.operations;



public class PutOrganizationConformancePackResponse {
    public String contentType;
    public PutOrganizationConformancePackResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object insufficientPermissionsException;
    public PutOrganizationConformancePackResponse withInsufficientPermissionsException(Object insufficientPermissionsException) {
        this.insufficientPermissionsException = insufficientPermissionsException;
        return this;
    }
    public Object maxNumberOfOrganizationConformancePacksExceededException;
    public PutOrganizationConformancePackResponse withMaxNumberOfOrganizationConformancePacksExceededException(Object maxNumberOfOrganizationConformancePacksExceededException) {
        this.maxNumberOfOrganizationConformancePacksExceededException = maxNumberOfOrganizationConformancePacksExceededException;
        return this;
    }
    public Object noAvailableOrganizationException;
    public PutOrganizationConformancePackResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public PutOrganizationConformancePackResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Object organizationAllFeaturesNotEnabledException;
    public PutOrganizationConformancePackResponse withOrganizationAllFeaturesNotEnabledException(Object organizationAllFeaturesNotEnabledException) {
        this.organizationAllFeaturesNotEnabledException = organizationAllFeaturesNotEnabledException;
        return this;
    }
    public Object organizationConformancePackTemplateValidationException;
    public PutOrganizationConformancePackResponse withOrganizationConformancePackTemplateValidationException(Object organizationConformancePackTemplateValidationException) {
        this.organizationConformancePackTemplateValidationException = organizationConformancePackTemplateValidationException;
        return this;
    }
    public openapisdk.models.shared.PutOrganizationConformancePackResponse putOrganizationConformancePackResponse;
    public PutOrganizationConformancePackResponse withPutOrganizationConformancePackResponse(openapisdk.models.shared.PutOrganizationConformancePackResponse putOrganizationConformancePackResponse) {
        this.putOrganizationConformancePackResponse = putOrganizationConformancePackResponse;
        return this;
    }
    public Object resourceInUseException;
    public PutOrganizationConformancePackResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public PutOrganizationConformancePackResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutOrganizationConformancePackResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}