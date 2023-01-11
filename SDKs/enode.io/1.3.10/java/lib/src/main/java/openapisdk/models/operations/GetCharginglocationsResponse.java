package openapisdk.models.operations;



public class GetCharginglocationsResponse {
    public String contentType;
    public GetCharginglocationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCharginglocationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[] onechargingLocationsPostRequestBodyContentApplication1jsonSchemas;
    public GetCharginglocationsResponse withOnechargingLocationsPostRequestBodyContentApplication1jsonSchemas(openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema[] onechargingLocationsPostRequestBodyContentApplication1jsonSchemas) {
        this.onechargingLocationsPostRequestBodyContentApplication1jsonSchemas = onechargingLocationsPostRequestBodyContentApplication1jsonSchemas;
        return this;
    }
}