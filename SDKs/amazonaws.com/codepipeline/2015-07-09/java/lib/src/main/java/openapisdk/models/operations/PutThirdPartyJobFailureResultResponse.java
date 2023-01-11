package openapisdk.models.operations;



public class PutThirdPartyJobFailureResultResponse {
    public String contentType;
    public PutThirdPartyJobFailureResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidClientTokenException;
    public PutThirdPartyJobFailureResultResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidJobStateException;
    public PutThirdPartyJobFailureResultResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object jobNotFoundException;
    public PutThirdPartyJobFailureResultResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutThirdPartyJobFailureResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutThirdPartyJobFailureResultResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}