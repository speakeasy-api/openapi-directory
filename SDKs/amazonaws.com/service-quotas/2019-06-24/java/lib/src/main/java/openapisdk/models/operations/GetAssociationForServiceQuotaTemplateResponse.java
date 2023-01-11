package openapisdk.models.operations;



public class GetAssociationForServiceQuotaTemplateResponse {
    public Object awsServiceAccessNotEnabledException;
    public GetAssociationForServiceQuotaTemplateResponse withAwsServiceAccessNotEnabledException(Object awsServiceAccessNotEnabledException) {
        this.awsServiceAccessNotEnabledException = awsServiceAccessNotEnabledException;
        return this;
    }
    public Object accessDeniedException;
    public GetAssociationForServiceQuotaTemplateResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAssociationForServiceQuotaTemplateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyAccessDeniedException;
    public GetAssociationForServiceQuotaTemplateResponse withDependencyAccessDeniedException(Object dependencyAccessDeniedException) {
        this.dependencyAccessDeniedException = dependencyAccessDeniedException;
        return this;
    }
    public openapisdk.models.shared.GetAssociationForServiceQuotaTemplateResponse getAssociationForServiceQuotaTemplateResponse;
    public GetAssociationForServiceQuotaTemplateResponse withGetAssociationForServiceQuotaTemplateResponse(openapisdk.models.shared.GetAssociationForServiceQuotaTemplateResponse getAssociationForServiceQuotaTemplateResponse) {
        this.getAssociationForServiceQuotaTemplateResponse = getAssociationForServiceQuotaTemplateResponse;
        return this;
    }
    public Object noAvailableOrganizationException;
    public GetAssociationForServiceQuotaTemplateResponse withNoAvailableOrganizationException(Object noAvailableOrganizationException) {
        this.noAvailableOrganizationException = noAvailableOrganizationException;
        return this;
    }
    public Object serviceException;
    public GetAssociationForServiceQuotaTemplateResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaTemplateNotInUseException;
    public GetAssociationForServiceQuotaTemplateResponse withServiceQuotaTemplateNotInUseException(Object serviceQuotaTemplateNotInUseException) {
        this.serviceQuotaTemplateNotInUseException = serviceQuotaTemplateNotInUseException;
        return this;
    }
    public Long statusCode;
    public GetAssociationForServiceQuotaTemplateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object templatesNotAvailableInRegionException;
    public GetAssociationForServiceQuotaTemplateResponse withTemplatesNotAvailableInRegionException(Object templatesNotAvailableInRegionException) {
        this.templatesNotAvailableInRegionException = templatesNotAvailableInRegionException;
        return this;
    }
    public Object tooManyRequestsException;
    public GetAssociationForServiceQuotaTemplateResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}