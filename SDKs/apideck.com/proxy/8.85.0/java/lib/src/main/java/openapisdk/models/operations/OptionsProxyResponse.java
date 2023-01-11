package openapisdk.models.operations;



public class OptionsProxyResponse {
    public String contentType;
    public OptionsProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public OptionsProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object optionsProxy200ApplicationJSONAny;
    public OptionsProxyResponse withOptionsProxy200ApplicationJsonAny(Object optionsProxy200ApplicationJSONAny) {
        this.optionsProxy200ApplicationJSONAny = optionsProxy200ApplicationJSONAny;
        return this;
    }
    public OptionsProxy401ApplicationJson optionsProxy401ApplicationJSONObject;
    public OptionsProxyResponse withOptionsProxy401ApplicationJsonObject(OptionsProxy401ApplicationJson optionsProxy401ApplicationJSONObject) {
        this.optionsProxy401ApplicationJSONObject = optionsProxy401ApplicationJSONObject;
        return this;
    }
    public Object optionsProxyDefaultApplicationJSONAny;
    public OptionsProxyResponse withOptionsProxyDefaultApplicationJsonAny(Object optionsProxyDefaultApplicationJSONAny) {
        this.optionsProxyDefaultApplicationJSONAny = optionsProxyDefaultApplicationJSONAny;
        return this;
    }
}