package openapisdk.models.operations;



public class ListTagsForResourceResponse {
    public String contentType;
    public ListTagsForResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object limitExceededFault;
    public ListTagsForResourceResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput;
    public ListTagsForResourceResponse withListTagsForResourceOutput(openapisdk.models.shared.ListTagsForResourceOutput listTagsForResourceOutput) {
        this.listTagsForResourceOutput = listTagsForResourceOutput;
        return this;
    }
    public Object operationNotPermittedFault;
    public ListTagsForResourceResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public ListTagsForResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public ListTagsForResourceResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}