package openapisdk.models.operations;



public class DescribeCasesResponse {
    public Object caseIdNotFound;
    public DescribeCasesResponse withCaseIdNotFound(Object caseIdNotFound) {
        this.caseIdNotFound = caseIdNotFound;
        return this;
    }
    public String contentType;
    public DescribeCasesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCasesResponse describeCasesResponse;
    public DescribeCasesResponse withDescribeCasesResponse(openapisdk.models.shared.DescribeCasesResponse describeCasesResponse) {
        this.describeCasesResponse = describeCasesResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeCasesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeCasesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}