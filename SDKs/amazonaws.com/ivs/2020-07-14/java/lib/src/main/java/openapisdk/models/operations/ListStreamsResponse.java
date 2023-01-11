package openapisdk.models.operations;



public class ListStreamsResponse {
    public Object accessDeniedException;
    public ListStreamsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListStreamsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListStreamsResponse listStreamsResponse;
    public ListStreamsResponse withListStreamsResponse(openapisdk.models.shared.ListStreamsResponse listStreamsResponse) {
        this.listStreamsResponse = listStreamsResponse;
        return this;
    }
    public Long statusCode;
    public ListStreamsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}