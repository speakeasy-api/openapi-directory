package openapisdk.models.operations;



public class ListReplaysResponse {
    public String contentType;
    public ListReplaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListReplaysResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListReplaysResponse listReplaysResponse;
    public ListReplaysResponse withListReplaysResponse(openapisdk.models.shared.ListReplaysResponse listReplaysResponse) {
        this.listReplaysResponse = listReplaysResponse;
        return this;
    }
    public Long statusCode;
    public ListReplaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}