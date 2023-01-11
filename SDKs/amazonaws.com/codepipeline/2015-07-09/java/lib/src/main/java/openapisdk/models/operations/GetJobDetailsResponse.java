package openapisdk.models.operations;



public class GetJobDetailsResponse {
    public String contentType;
    public GetJobDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJobDetailsOutput getJobDetailsOutput;
    public GetJobDetailsResponse withGetJobDetailsOutput(openapisdk.models.shared.GetJobDetailsOutput getJobDetailsOutput) {
        this.getJobDetailsOutput = getJobDetailsOutput;
        return this;
    }
    public Object jobNotFoundException;
    public GetJobDetailsResponse withJobNotFoundException(Object jobNotFoundException) {
        this.jobNotFoundException = jobNotFoundException;
        return this;
    }
    public Long statusCode;
    public GetJobDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetJobDetailsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}