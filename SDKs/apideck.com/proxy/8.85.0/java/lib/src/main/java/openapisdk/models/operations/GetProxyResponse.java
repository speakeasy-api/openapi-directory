package openapisdk.models.operations;



public class GetProxyResponse {
    public String contentType;
    public GetProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object getProxy200ApplicationJSONAny;
    public GetProxyResponse withGetProxy200ApplicationJsonAny(Object getProxy200ApplicationJSONAny) {
        this.getProxy200ApplicationJSONAny = getProxy200ApplicationJSONAny;
        return this;
    }
    public GetProxy401ApplicationJson getProxy401ApplicationJSONObject;
    public GetProxyResponse withGetProxy401ApplicationJsonObject(GetProxy401ApplicationJson getProxy401ApplicationJSONObject) {
        this.getProxy401ApplicationJSONObject = getProxy401ApplicationJSONObject;
        return this;
    }
    public Object getProxyDefaultApplicationJSONAny;
    public GetProxyResponse withGetProxyDefaultApplicationJsonAny(Object getProxyDefaultApplicationJSONAny) {
        this.getProxyDefaultApplicationJSONAny = getProxyDefaultApplicationJSONAny;
        return this;
    }
}