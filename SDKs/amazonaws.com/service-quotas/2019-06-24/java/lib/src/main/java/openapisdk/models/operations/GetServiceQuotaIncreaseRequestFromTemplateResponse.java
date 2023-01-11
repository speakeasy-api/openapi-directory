package openapisdk.models.operations;



public class GetServiceQuotaIncreaseRequestFromTemplateResponse {
    public Object awsServiceAccessNotEnabledException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withAwsServiceAccessNotEnabledException(Object awsServiceAccessNotEnabledException) {
        this.awsServiceAccessNotEnabledException = awsServiceAccessNotEnabledException;
        return this;
    }
    public Object accessDeniedException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public openapisdk.models.shared.GetServiceQuotaIncreaseRequestFromTemplateResponse getServiceQuotaIncreaseRequestFromTemplateResponse;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withGetServiceQuotaIncreaseRequestFromTemplateResponse(openapisdk.models.shared.GetServiceQuotaIncreaseRequestFromTemplateResponse getServiceQuotaIncreaseRequestFromTemplateResponse) {
        this.getServiceQuotaIncreaseRequestFromTemplateResponse = getServiceQuotaIncreaseRequestFromTemplateResponse;
        return this;
    }
    public Object illegalArgumentException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public Object noAvailableOrganizationException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object noSuchResourceException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withNoSuchResourceException(Object noSuchResourceException) {
        this.noSuchResourceException = noSuchResourceException;
        return this;
    }
    public Object serviceException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object templatesNotAvailableInRegionException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withTemplatesNotAvailableInRegionException(Object templatesNotAvailableInRegionException) {
        this.templatesNotAvailableInRegionException = templatesNotAvailableInRegionException;
        return this;
    }
    public Object tooManyRequestsException;
    public GetServiceQuotaIncreaseRequestFromTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}