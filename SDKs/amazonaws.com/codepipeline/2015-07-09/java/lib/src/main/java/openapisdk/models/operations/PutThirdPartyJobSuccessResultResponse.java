package openapisdk.models.operations;



public class PutThirdPartyJobSuccessResultResponse {
    public String contentType;
    public PutThirdPartyJobSuccessResultResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidClientTokenException;
    public PutThirdPartyJobSuccessResultResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidJobStateException;
    public PutThirdPartyJobSuccessResultResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object jobNotFoundException;
    public PutThirdPartyJobSuccessResultResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public PutThirdPartyJobSuccessResultResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PutThirdPartyJobSuccessResultResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}