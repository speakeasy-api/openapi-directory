package openapisdk.models.operations;



public class PepMonitorUnregisterResponse {
    public String contentType;
    public PepMonitorUnregisterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pepMonitorUnregister200ApplicationJSONAny;
    public PepMonitorUnregisterResponse withPepMonitorUnregister200ApplicationJsonAny(Object pepMonitorUnregister200ApplicationJSONAny) {
        this.pepMonitorUnregister200ApplicationJSONAny = pepMonitorUnregister200ApplicationJSONAny;
        return this;
    }
    public Object pepMonitorUnregisterDefaultApplicationJSONAny;
    public PepMonitorUnregisterResponse withPepMonitorUnregisterDefaultApplicationJsonAny(Object pepMonitorUnregisterDefaultApplicationJSONAny) {
        this.pepMonitorUnregisterDefaultApplicationJSONAny = pepMonitorUnregisterDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public PepMonitorUnregisterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}