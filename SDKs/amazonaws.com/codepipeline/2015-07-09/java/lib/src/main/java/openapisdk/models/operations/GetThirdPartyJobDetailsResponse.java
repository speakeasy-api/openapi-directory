package openapisdk.models.operations;



public class GetThirdPartyJobDetailsResponse {
    public String contentType;
    public GetThirdPartyJobDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetThirdPartyJobDetailsOutput getThirdPartyJobDetailsOutput;
    public GetThirdPartyJobDetailsResponse withGetThirdPartyJobDetailsOutput(openapisdk.models.shared.GetThirdPartyJobDetailsOutput getThirdPartyJobDetailsOutput) {
        this.getThirdPartyJobDetailsOutput = getThirdPartyJobDetailsOutput;
        return this;
    }
    public Object invalidClientTokenException;
    public GetThirdPartyJobDetailsResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidJobException;
    public GetThirdPartyJobDetailsResponse withInvalidJobException(Object invalidJobException) {
        this.invalidJobException = invalidJobException;
        return this;
    }
    public Object jobNotFoundException;
    public GetThirdPartyJobDetailsResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetThirdPartyJobDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetThirdPartyJobDetailsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}