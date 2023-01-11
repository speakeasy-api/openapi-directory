package openapisdk.models.operations;



public class GetHlsStreamingSessionUrlResponse {
    public Object clientLimitExceededException;
    public GetHlsStreamingSessionUrlResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetHlsStreamingSessionUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetHlsStreamingSessionUrlOutput getHLSStreamingSessionURLOutput;
    public GetHlsStreamingSessionUrlResponse withGetHlsStreamingSessionUrlOutput(openapisdk.models.shared.GetHlsStreamingSessionUrlOutput getHLSStreamingSessionURLOutput) {
        this.getHLSStreamingSessionURLOutput = getHLSStreamingSessionURLOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetHlsStreamingSessionUrlResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidCodecPrivateDataException;
    public GetHlsStreamingSessionUrlResponse withInvalidCodecPrivateDataException(Object invalidCodecPrivateDataException) {
        this.invalidCodecPrivateDataException = invalidCodecPrivateDataException;
        return this;
    }
    public Object missingCodecPrivateDataException;
    public GetHlsStreamingSessionUrlResponse withMissingCodecPrivateDataException(Object missingCodecPrivateDataException) {
        this.missingCodecPrivateDataException = missingCodecPrivateDataException;
        return this;
    }
    public Object noDataRetentionException;
    public GetHlsStreamingSessionUrlResponse withNoDataRetentionException(Object noDataRetentionException) {
        this.noDataRetentionException = noDataRetentionException;
        return this;
    }
    public Object notAuthorizedException;
    public GetHlsStreamingSessionUrlResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetHlsStreamingSessionUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetHlsStreamingSessionUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedStreamMediaTypeException;
    public GetHlsStreamingSessionUrlResponse withUnsupportedStreamMediaTypeException(Object unsupportedStreamMediaTypeException) {
        this.unsupportedStreamMediaTypeException = unsupportedStreamMediaTypeException;
        return this;
    }
}