package openapisdk.models.operations;



public class PutProxyResponse {
    public String contentType;
    public PutProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object putProxy200ApplicationJSONAny;
    public PutProxyResponse withPutProxy200ApplicationJsonAny(Object putProxy200ApplicationJSONAny) {
        this.putProxy200ApplicationJSONAny = putProxy200ApplicationJSONAny;
        return this;
    }
    public PutProxy401ApplicationJson putProxy401ApplicationJSONObject;
    public PutProxyResponse withPutProxy401ApplicationJsonObject(PutProxy401ApplicationJson putProxy401ApplicationJSONObject) {
        this.putProxy401ApplicationJSONObject = putProxy401ApplicationJSONObject;
        return this;
    }
    public Object putProxyDefaultApplicationJSONAny;
    public PutProxyResponse withPutProxyDefaultApplicationJsonAny(Object putProxyDefaultApplicationJSONAny) {
        this.putProxyDefaultApplicationJSONAny = putProxyDefaultApplicationJSONAny;
        return this;
    }
}