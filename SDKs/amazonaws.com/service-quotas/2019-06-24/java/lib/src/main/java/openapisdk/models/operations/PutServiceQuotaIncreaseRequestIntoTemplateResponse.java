package openapisdk.models.operations;



public class PutServiceQuotaIncreaseRequestIntoTemplateResponse {
    public Object awsServiceAccessNotEnabledException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withAwsServiceAccessNotEnabledException(Object awsServiceAccessNotEnabledException) {
        this.awsServiceAccessNotEnabledException = awsServiceAccessNotEnabledException;
        return this;
    }
    public Object accessDeniedException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public Object illegalArgumentException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object noAvailableOrganizationException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object noSuchResourceException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public openapisdk.models.shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse putServiceQuotaIncreaseRequestIntoTemplateResponse;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withPutServiceQuotaIncreaseRequestIntoTemplateResponse(openapisdk.models.shared.PutServiceQuotaIncreaseRequestIntoTemplateResponse putServiceQuotaIncreaseRequestIntoTemplateResponse) {
        this.putServiceQuotaIncreaseRequestIntoTemplateResponse = putServiceQuotaIncreaseRequestIntoTemplateResponse;
        return this;
    }
    public Object quotaExceededException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withQuotaExceededException(Object quotaExceededException) {
        this.quotaExceededException = quotaExceededException;
        return this;
    }
    public Object serviceException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object templatesNotAvailableInRegionException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withTemplatesNotAvailableInRegionException(Object templatesNotAvailableInRegionException) {
        this.templatesNotAvailableInRegionException = templatesNotAvailableInRegionException;
        return this;
    }
    public Object tooManyRequestsException;
    public PutServiceQuotaIncreaseRequestIntoTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}