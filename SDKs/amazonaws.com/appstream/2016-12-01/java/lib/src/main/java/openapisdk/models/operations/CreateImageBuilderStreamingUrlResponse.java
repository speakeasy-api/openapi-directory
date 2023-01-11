package openapisdk.models.operations;



public class CreateImageBuilderStreamingUrlResponse {
    public String contentType;
    public CreateImageBuilderStreamingUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateImageBuilderStreamingUrlResult createImageBuilderStreamingURLResult;
    public CreateImageBuilderStreamingUrlResponse withCreateImageBuilderStreamingUrlResult(openapisdk.models.shared.CreateImageBuilderStreamingUrlResult createImageBuilderStreamingURLResult) {
        this.createImageBuilderStreamingURLResult = createImageBuilderStreamingURLResult;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateImageBuilderStreamingUrlResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateImageBuilderStreamingUrlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateImageBuilderStreamingUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}