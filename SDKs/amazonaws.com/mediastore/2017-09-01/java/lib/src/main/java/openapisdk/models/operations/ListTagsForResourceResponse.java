package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public Object containerInUseException;
    public ListTagsForResourceResponse withContainerInUseException(Object containerInUseException) {
        this.containerInUseException = containerInUseException;
        return this;
    }
    public Object containerNotFoundException;
    public ListTagsForResourceResponse withContainerNotFoundException(Object containerNotFoundException) {
        this.containerNotFoundException = containerNotFoundException;
        return this;
    }
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListTagsForResourceResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput;
    public ListTagsForResourceResponse withListTagsForResourceOutput(openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput) {
        this.listTagsForResourceOutput = listTagsForResourceOutput;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}