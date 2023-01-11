package openapisdk.models.operations;



public class AcknowledgeThirdPartyJobResponse {
    public openapisdk.models.shared.AcknowledgeThirdPartyJobOutput acknowledgeThirdPartyJobOutput;
    public AcknowledgeThirdPartyJobResponse withAcknowledgeThirdPartyJobOutput(openapisdk.models.shared.AcknowledgeThirdPartyJobOutput acknowledgeThirdPartyJobOutput) {
        this.acknowledgeThirdPartyJobOutput = acknowledgeThirdPartyJobOutput;
        return this;
    }
    public String contentType;
    public AcknowledgeThirdPartyJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidClientTokenException;
    public AcknowledgeThirdPartyJobResponse withInvalidClientTokenException(Object invalidClientTokenException) {
        this.invalidClientTokenException = invalidClientTokenException;
        return this;
    }
    public Object invalidNonceException;
    public AcknowledgeThirdPartyJobResponse withInvalidNonceException(Object invalidNonceException) {
        this.invalidNonceException = invalidNonceException;
        return this;
    }
    public Object jobNotFoundException;
    public AcknowledgeThirdPartyJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcknowledgeThirdPartyJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AcknowledgeThirdPartyJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}