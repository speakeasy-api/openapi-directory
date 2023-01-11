package openapisdk.models.operations;



public class GetHealthCheckResponse {
    public String contentType;
    public GetHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HealthCheckRead healthCheckRead;
    public GetHealthCheckResponse withHealthCheckRead(openapisdk.models.shared.HealthCheckRead healthCheckRead) {
        this.healthCheckRead = healthCheckRead;
        return this;
    }
    public Long statusCode;
    public GetHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}