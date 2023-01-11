package openapisdk.models.operations;



public class StartMatchBackfillResponse {
    public String contentType;
    public StartMatchBackfillResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StartMatchBackfillResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public StartMatchBackfillResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public StartMatchBackfillResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.StartMatchBackfillOutput startMatchBackfillOutput;
    public StartMatchBackfillResponse withStartMatchBackfillOutput(openapisdk.models.shared.StartMatchBackfillOutput startMatchBackfillOutput) {
        this.startMatchBackfillOutput = startMatchBackfillOutput;
        return this;
    }
    public Long statusCode;
    public StartMatchBackfillResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public StartMatchBackfillResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}