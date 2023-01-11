package openapisdk.models.operations;



public class AcknowledgeJobResponse {
    public openapisdk.models.shared.AcknowledgeJobOutput acknowledgeJobOutput;
    public AcknowledgeJobResponse withAcknowledgeJobOutput(openapisdk.models.shared.AcknowledgeJobOutput acknowledgeJobOutput) {
        this.acknowledgeJobOutput = acknowledgeJobOutput;
        return this;
    }
    public String contentType;
    public AcknowledgeJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNonceException;
    public AcknowledgeJobResponse withInvalidNonceException(Object invalidNonceException) {
        this.invalidNonceException = invalidNonceException;
        return this;
    }
    public Object jobNotFoundException;
    public AcknowledgeJobResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public AcknowledgeJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public AcknowledgeJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}