package openapisdk.models.operations;



public class GetDashStreamingSessionUrlResponse {
    public Object clientLimitExceededException;
    public GetDashStreamingSessionUrlResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetDashStreamingSessionUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDashStreamingSessionUrlOutput getDASHStreamingSessionURLOutput;
    public GetDashStreamingSessionUrlResponse withGetDashStreamingSessionUrlOutput(openapisdk.models.shared.GetDashStreamingSessionUrlOutput getDASHStreamingSessionURLOutput) {
        this.getDASHStreamingSessionURLOutput = getDASHStreamingSessionURLOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetDashStreamingSessionUrlResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidCodecPrivateDataException;
    public GetDashStreamingSessionUrlResponse withInvalidCodecPrivateDataException(Object invalidCodecPrivateDataException) {
        this.invalidCodecPrivateDataException = invalidCodecPrivateDataException;
        return this;
    }
    public Object missingCodecPrivateDataException;
    public GetDashStreamingSessionUrlResponse withMissingCodecPrivateDataException(Object missingCodecPrivateDataException) {
        this.missingCodecPrivateDataException = missingCodecPrivateDataException;
        return this;
    }
    public Object noDataRetentionException;
    public GetDashStreamingSessionUrlResponse withNoDataRetentionException(Object noDataRetentionException) {
        this.noDataRetentionException = noDataRetentionException;
        return this;
    }
    public Object notAuthorizedException;
    public GetDashStreamingSessionUrlResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetDashStreamingSessionUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetDashStreamingSessionUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedStreamMediaTypeException;
    public GetDashStreamingSessionUrlResponse withUnsupportedStreamMediaTypeException(Object unsupportedStreamMediaTypeException) {
        this.unsupportedStreamMediaTypeException = unsupportedStreamMediaTypeException;
        return this;
    }
}