package openapisdk.models.operations;



public class PostCharginglocationsResponse {
    public String contentType;
    public PostCharginglocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PostCharginglocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema onechargingLocationsPostRequestBodyContentApplication1jsonSchema;
    public PostCharginglocationsResponse withOnechargingLocationsPostRequestBodyContentApplication1jsonSchema(openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema onechargingLocationsPostRequestBodyContentApplication1jsonSchema) {
        this.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = onechargingLocationsPostRequestBodyContentApplication1jsonSchema;
        return this;
    }
}