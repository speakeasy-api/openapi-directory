package openapisdk.models.operations;



public class PepMonitorListResponse {
    public String contentType;
    public PepMonitorListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] pepMonitorList200ApplicationJSONAnies;
    public PepMonitorListResponse withPepMonitorList200ApplicationJsonAnies(Object[] pepMonitorList200ApplicationJSONAnies) {
        this.pepMonitorList200ApplicationJSONAnies = pepMonitorList200ApplicationJSONAnies;
        return this;
    }
    public Object pepMonitorListDefaultApplicationJSONAny;
    public PepMonitorListResponse withPepMonitorListDefaultApplicationJsonAny(Object pepMonitorListDefaultApplicationJSONAny) {
        this.pepMonitorListDefaultApplicationJSONAny = pepMonitorListDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public PepMonitorListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}