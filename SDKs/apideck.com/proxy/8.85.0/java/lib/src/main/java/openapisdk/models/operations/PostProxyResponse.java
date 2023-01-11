package openapisdk.models.operations;



public class PostProxyResponse {
    public String contentType;
    public PostProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object postProxy200ApplicationJSONAny;
    public PostProxyResponse withPostProxy200ApplicationJsonAny(Object postProxy200ApplicationJSONAny) {
        this.postProxy200ApplicationJSONAny = postProxy200ApplicationJSONAny;
        return this;
    }
    public PostProxy401ApplicationJson postProxy401ApplicationJSONObject;
    public PostProxyResponse withPostProxy401ApplicationJsonObject(PostProxy401ApplicationJson postProxy401ApplicationJSONObject) {
        this.postProxy401ApplicationJSONObject = postProxy401ApplicationJSONObject;
        return this;
    }
    public Object postProxyDefaultApplicationJSONAny;
    public PostProxyResponse withPostProxyDefaultApplicationJsonAny(Object postProxyDefaultApplicationJSONAny) {
        this.postProxyDefaultApplicationJSONAny = postProxyDefaultApplicationJSONAny;
        return this;
    }
}