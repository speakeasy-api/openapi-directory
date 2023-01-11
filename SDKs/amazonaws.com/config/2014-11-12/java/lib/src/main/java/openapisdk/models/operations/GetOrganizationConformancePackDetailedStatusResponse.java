package openapisdk.models.operations;



public class GetOrganizationConformancePackDetailedStatusResponse {
    public String contentType;
    public GetOrganizationConformancePackDetailedStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetOrganizationConformancePackDetailedStatusResponse getOrganizationConformancePackDetailedStatusResponse;
    public GetOrganizationConformancePackDetailedStatusResponse withGetOrganizationConformancePackDetailedStatusResponse(openapisdk.models.shared.GetOrganizationConformancePackDetailedStatusResponse getOrganizationConformancePackDetailedStatusResponse) {
        this.getOrganizationConformancePackDetailedStatusResponse = getOrganizationConformancePackDetailedStatusResponse;
        return this;
    }
    public Object invalidLimitException;
    public GetOrganizationConformancePackDetailedStatusResponse withInvalidLimitException(Object invalidLimitException) {
        this.invalidLimitException = invalidLimitException;
        return this;
    }
    public Object invalidNextTokenException;
    public GetOrganizationConformancePackDetailedStatusResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object noSuchOrganizationConformancePackException;
    public GetOrganizationConformancePackDetailedStatusResponse withNoSuchOrganizationConformancePackException(Object noSuchOrganizationConformancePackException) {
        this.noSuchOrganizationConformancePackException = noSuchOrganizationConformancePackException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public GetOrganizationConformancePackDetailedStatusResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Long statusCode;
    public GetOrganizationConformancePackDetailedStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}