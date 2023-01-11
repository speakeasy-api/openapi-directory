package openapisdk.models.operations;



public class SubmitJobResponse {
    public Object clientException;
    public SubmitJobResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public SubmitJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serverException;
    public SubmitJobResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public SubmitJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SubmitJobResponse submitJobResponse;
    public SubmitJobResponse withSubmitJobResponse(openapisdk.models.shared.SubmitJobResponse submitJobResponse) {
        this.submitJobResponse = submitJobResponse;
        return this;
    }
}