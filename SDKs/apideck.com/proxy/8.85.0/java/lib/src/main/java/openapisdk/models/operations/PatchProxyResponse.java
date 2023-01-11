package openapisdk.models.operations;



public class PatchProxyResponse {
    public String contentType;
    public PatchProxyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PatchProxyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object patchProxy200ApplicationJSONAny;
    public PatchProxyResponse withPatchProxy200ApplicationJsonAny(Object patchProxy200ApplicationJSONAny) {
        this.patchProxy200ApplicationJSONAny = patchProxy200ApplicationJSONAny;
        return this;
    }
    public PatchProxy401ApplicationJson patchProxy401ApplicationJSONObject;
    public PatchProxyResponse withPatchProxy401ApplicationJsonObject(PatchProxy401ApplicationJson patchProxy401ApplicationJSONObject) {
        this.patchProxy401ApplicationJSONObject = patchProxy401ApplicationJSONObject;
        return this;
    }
    public Object patchProxyDefaultApplicationJSONAny;
    public PatchProxyResponse withPatchProxyDefaultApplicationJsonAny(Object patchProxyDefaultApplicationJSONAny) {
        this.patchProxyDefaultApplicationJSONAny = patchProxyDefaultApplicationJSONAny;
        return this;
    }
}