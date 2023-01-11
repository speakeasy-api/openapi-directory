package openapisdk.models.operations;



public class GetCharginglocationsCharginglocationidResponse {
    public String contentType;
    public GetCharginglocationsCharginglocationidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetCharginglocationsCharginglocationidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema onechargingLocationsPostRequestBodyContentApplication1jsonSchema;
    public GetCharginglocationsCharginglocationidResponse withOnechargingLocationsPostRequestBodyContentApplication1jsonSchema(openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema onechargingLocationsPostRequestBodyContentApplication1jsonSchema) {
        this.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = onechargingLocationsPostRequestBodyContentApplication1jsonSchema;
        return this;
    }
}