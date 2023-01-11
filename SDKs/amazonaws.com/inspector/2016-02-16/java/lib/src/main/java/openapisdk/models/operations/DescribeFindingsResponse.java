package openapisdk.models.operations;



public class DescribeFindingsResponse {
    public String contentType;
    public DescribeFindingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeFindingsResponse describeFindingsResponse;
    public DescribeFindingsResponse withDescribeFindingsResponse(openapisdk.models.shared.DescribeFindingsResponse describeFindingsResponse) {
        this.describeFindingsResponse = describeFindingsResponse;
        return this;
    }
    public Object internalException;
    public DescribeFindingsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidInputException;
    public DescribeFindingsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Long statusCode;
    public DescribeFindingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}