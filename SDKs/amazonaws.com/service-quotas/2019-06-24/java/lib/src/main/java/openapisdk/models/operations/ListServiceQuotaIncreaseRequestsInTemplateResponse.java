package openapisdk.models.operations;



public class ListServiceQuotaIncreaseRequestsInTemplateResponse {
    public Object awsServiceAccessNotEnabledException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withAwsServiceAccessNotEnabledException(Object awsServiceAccessNotEnabledException) {
        this.awsServiceAccessNotEnabledException = awsServiceAccessNotEnabledException;
        return this;
    }
    public Object accessDeniedException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public Object illegalArgumentException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withIllegalArgumentException(Object illegalArgumentException) {
        this.illegalArgumentException = illegalArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListServiceQuotaIncreaseRequestsInTemplateResponse listServiceQuotaIncreaseRequestsInTemplateResponse;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withListServiceQuotaIncreaseRequestsInTemplateResponse(openapisdk.models.shared.ListServiceQuotaIncreaseRequestsInTemplateResponse listServiceQuotaIncreaseRequestsInTemplateResponse) {
        this.listServiceQuotaIncreaseRequestsInTemplateResponse = listServiceQuotaIncreaseRequestsInTemplateResponse;
        return this;
    }
    public Object noAvailableOrganizationException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object serviceException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object templatesNotAvailableInRegionException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withTemplatesNotAvailableInRegionException(Object templatesNotAvailableInRegionException) {
        this.templatesNotAvailableInRegionException = templatesNotAvailableInRegionException;
        return this;
    }
    public Object tooManyRequestsException;
    public ListServiceQuotaIncreaseRequestsInTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}