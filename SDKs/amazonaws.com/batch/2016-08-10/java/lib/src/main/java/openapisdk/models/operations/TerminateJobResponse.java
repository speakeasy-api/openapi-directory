package openapisdk.models.operations;



public class TerminateJobResponse {
    public Object clientException;
    public TerminateJobResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public TerminateJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object serverException;
    public TerminateJobResponse withServerException(Object serverException) {
        this.serverException = serverException;
        return this;
    }
    public Long statusCode;
    public TerminateJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> terminateJobResponse;
    public TerminateJobResponse withTerminateJobResponse(java.util.Map<String, Object> terminateJobResponse) {
        this.terminateJobResponse = terminateJobResponse;
        return this;
    }
}