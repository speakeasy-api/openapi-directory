package openapisdk.models.operations;



public class DisassociateServiceQuotaTemplateResponse {
    public Object awsServiceAccessNotEnabledException;
    public DisassociateServiceQuotaTemplateResponse withAwsServiceAccessNotEnabledException(Object awsServiceAccessNotEnabledException) {
        this.awsServiceAccessNotEnabledException = awsServiceAccessNotEnabledException;
        return this;
    }
    public Object accessDeniedException;
    public DisassociateServiceQuotaTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DisassociateServiceQuotaTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public DisassociateServiceQuotaTemplateResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> disassociateServiceQuotaTemplateResponse;
    public DisassociateServiceQuotaTemplateResponse withDisassociateServiceQuotaTemplateResponse(java.util.Map<String, Object> disassociateServiceQuotaTemplateResponse) {
        this.disassociateServiceQuotaTemplateResponse = disassociateServiceQuotaTemplateResponse;
        return this;
    }
    public Object noAvailableOrganizationException;
    public DisassociateServiceQuotaTemplateResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object serviceException;
    public DisassociateServiceQuotaTemplateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaTemplateNotInUseException;
    public DisassociateServiceQuotaTemplateResponse withServiceQuotaTemplateNotInUseException(Object serviceQuotaTemplateNotInUseException) {
        this.serviceQuotaTemplateNotInUseException = serviceQuotaTemplateNotInUseException;
        return this;
    }
    public Long statusCode;
    public DisassociateServiceQuotaTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object templatesNotAvailableInRegionException;
    public DisassociateServiceQuotaTemplateResponse withTemplatesNotAvailableInRegionException(Object templatesNotAvailableInRegionException) {
        this.templatesNotAvailableInRegionException = templatesNotAvailableInRegionException;
        return this;
    }
    public Object tooManyRequestsException;
    public DisassociateServiceQuotaTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}