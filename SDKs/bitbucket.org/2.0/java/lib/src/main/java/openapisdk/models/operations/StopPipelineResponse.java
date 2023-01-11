package openapisdk.models.operations;



public class StopPipelineResponse {
    public String contentType;
    public StopPipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public StopPipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> error;
    public StopPipelineResponse withError(java.util.Map<String, Object> error) {
        this.error = error;
        return this;
    }
}