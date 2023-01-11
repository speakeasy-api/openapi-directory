package openapisdk.models.operations;



public class DeletePipelineResponse {
    public Object concurrentModificationException;
    public DeletePipelineResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeletePipelineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeletePipelineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeletePipelineResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}