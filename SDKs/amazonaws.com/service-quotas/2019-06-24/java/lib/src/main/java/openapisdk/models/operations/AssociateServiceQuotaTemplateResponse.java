package openapisdk.models.operations;



public class AssociateServiceQuotaTemplateResponse {
    public Object awsServiceAccessNotEnabledException;
    public AssociateServiceQuotaTemplateResponse withAwsServiceAccessNotEnabledException(Object awsServiceAccessNotEnabledException) {
        this.awsServiceAccessNotEnabledException = awsServiceAccessNotEnabledException;
        return this;
    }
    public Object accessDeniedException;
    public AssociateServiceQuotaTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> associateServiceQuotaTemplateResponse;
    public AssociateServiceQuotaTemplateResponse withAssociateServiceQuotaTemplateResponse(java.util.Map<String, Object> associateServiceQuotaTemplateResponse) {
        this.associateServiceQuotaTemplateResponse = associateServiceQuotaTemplateResponse;
        return this;
    }
    public String contentType;
    public AssociateServiceQuotaTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public AssociateServiceQuotaTemplateResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public Object noAvailableOrganizationException;
    public AssociateServiceQuotaTemplateResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object organizationNotInAllFeaturesModeException;
    public AssociateServiceQuotaTemplateResponse withOrganizationNotInAllFeaturesModeException(Object organizationNotInAllFeaturesModeException) {
        this.organizationNotInAllFeaturesModeException = organizationNotInAllFeaturesModeException;
        return this;
    }
    public Object serviceException;
    public AssociateServiceQuotaTemplateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public AssociateServiceQuotaTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object templatesNotAvailableInRegionException;
    public AssociateServiceQuotaTemplateResponse withTemplatesNotAvailableInRegionException(Object templatesNotAvailableInRegionException) {
        this.templatesNotAvailableInRegionException = templatesNotAvailableInRegionException;
        return this;
    }
    public Object tooManyRequestsException;
    public AssociateServiceQuotaTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}