package openapisdk.models.operations;



public class DescribeCommunicationsResponse {
    public Object caseIdNotFound;
    public DescribeCommunicationsResponse withCaseIdNotFound(Object caseIdNotFound) {
        this.caseIdNotFound = caseIdNotFound;
        return this;
    }
    public String contentType;
    public DescribeCommunicationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCommunicationsResponse describeCommunicationsResponse;
    public DescribeCommunicationsResponse withDescribeCommunicationsResponse(openapisdk.models.shared.DescribeCommunicationsResponse describeCommunicationsResponse) {
        this.describeCommunicationsResponse = describeCommunicationsResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeCommunicationsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeCommunicationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}