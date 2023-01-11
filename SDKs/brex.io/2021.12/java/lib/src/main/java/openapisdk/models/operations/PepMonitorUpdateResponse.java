package openapisdk.models.operations;



public class PepMonitorUpdateResponse {
    public String contentType;
    public PepMonitorUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object pepMonitorUpdate200ApplicationJSONAny;
    public PepMonitorUpdateResponse withPepMonitorUpdate200ApplicationJsonAny(Object pepMonitorUpdate200ApplicationJSONAny) {
        this.pepMonitorUpdate200ApplicationJSONAny = pepMonitorUpdate200ApplicationJSONAny;
        return this;
    }
    public Object pepMonitorUpdateDefaultApplicationJSONAny;
    public PepMonitorUpdateResponse withPepMonitorUpdateDefaultApplicationJsonAny(Object pepMonitorUpdateDefaultApplicationJSONAny) {
        this.pepMonitorUpdateDefaultApplicationJSONAny = pepMonitorUpdateDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public PepMonitorUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}