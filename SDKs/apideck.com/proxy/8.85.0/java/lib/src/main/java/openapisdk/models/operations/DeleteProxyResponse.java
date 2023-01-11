package openapisdk.models.operations;



public class DeleteProxyResponse {
    public String contentType;
    public DeleteProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object deleteProxy200ApplicationJSONAny;
    public DeleteProxyResponse withDeleteProxy200ApplicationJsonAny(Object deleteProxy200ApplicationJSONAny) {
        this.deleteProxy200ApplicationJSONAny = deleteProxy200ApplicationJSONAny;
        return this;
    }
    public DeleteProxy401ApplicationJson deleteProxy401ApplicationJSONObject;
    public DeleteProxyResponse withDeleteProxy401ApplicationJsonObject(DeleteProxy401ApplicationJson deleteProxy401ApplicationJSONObject) {
        this.deleteProxy401ApplicationJSONObject = deleteProxy401ApplicationJSONObject;
        return this;
    }
    public Object deleteProxyDefaultApplicationJSONAny;
    public DeleteProxyResponse withDeleteProxyDefaultApplicationJsonAny(Object deleteProxyDefaultApplicationJSONAny) {
        this.deleteProxyDefaultApplicationJSONAny = deleteProxyDefaultApplicationJSONAny;
        return this;
    }
}