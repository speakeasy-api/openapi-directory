package openapisdk.models.operations;



public class HealthCheckResponse {
    public String contentType;
    public HealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object[] healthCheck200ApplicationJSONAnies;
    public HealthCheckResponse withHealthCheck200ApplicationJsonAnies(Object[] healthCheck200ApplicationJSONAnies) {
        this.healthCheck200ApplicationJSONAnies = healthCheck200ApplicationJSONAnies;
        return this;
    }
    public Object healthCheckDefaultApplicationJSONAny;
    public HealthCheckResponse withHealthCheckDefaultApplicationJsonAny(Object healthCheckDefaultApplicationJSONAny) {
        this.healthCheckDefaultApplicationJSONAny = healthCheckDefaultApplicationJSONAny;
        return this;
    }
    public Long statusCode;
    public HealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}