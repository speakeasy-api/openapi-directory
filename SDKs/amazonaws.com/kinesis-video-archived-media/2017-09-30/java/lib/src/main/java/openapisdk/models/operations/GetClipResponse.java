package openapisdk.models.operations;



public class GetClipResponse {
    public Object clientLimitExceededException;
    public GetClipResponse withClientLimitExceededException(Object clientLimitExceededException) {
        this.clientLimitExceededException = clientLimitExceededException;
        return this;
    }
    public String contentType;
    public GetClipResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetClipOutput getClipOutput;
    public GetClipResponse withGetClipOutput(openapisdk.models.shared.GetClipOutput getClipOutput) {
        this.getClipOutput = getClipOutput;
        return this;
    }
    public Object invalidArgumentException;
    public GetClipResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidCodecPrivateDataException;
    public GetClipResponse withInvalidCodecPrivateDataException(Object invalidCodecPrivateDataException) {
        this.invalidCodecPrivateDataException = invalidCodecPrivateDataException;
        return this;
    }
    public Object invalidMediaFrameException;
    public GetClipResponse withInvalidMediaFrameException(Object invalidMediaFrameException) {
        this.invalidMediaFrameException = invalidMediaFrameException;
        return this;
    }
    public Object missingCodecPrivateDataException;
    public GetClipResponse withMissingCodecPrivateDataException(Object missingCodecPrivateDataException) {
        this.missingCodecPrivateDataException = missingCodecPrivateDataException;
        return this;
    }
    public Object noDataRetentionException;
    public GetClipResponse withNoDataRetentionException(Object noDataRetentionException) {
        this.noDataRetentionException = noDataRetentionException;
        return this;
    }
    public Object notAuthorizedException;
    public GetClipResponse withNotAuthorizedException(Object notAuthorizedException) {
        this.notAuthorizedException = notAuthorizedException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetClipResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetClipResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedStreamMediaTypeException;
    public GetClipResponse withUnsupportedStreamMediaTypeException(Object unsupportedStreamMediaTypeException) {
        this.unsupportedStreamMediaTypeException = unsupportedStreamMediaTypeException;
        return this;
    }
}