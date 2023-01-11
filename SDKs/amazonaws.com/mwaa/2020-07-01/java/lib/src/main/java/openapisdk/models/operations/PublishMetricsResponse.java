package openapisdk.models.operations;



public class PublishMetricsResponse {
    public String contentType;
    public PublishMetricsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public PublishMetricsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public java.util.Map<String, Object> publishMetricsOutput;
    public PublishMetricsResponse withPublishMetricsOutput(java.util.Map<String, Object> publishMetricsOutput) {
        this.publishMetricsOutput = publishMetricsOutput;
        return this;
    }
    public Long statusCode;
    public PublishMetricsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PublishMetricsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}