package openapisdk.models.operations;



public class PutCharginglocationsCharginglocationidResponse {
    public String contentType;
    public PutCharginglocationsCharginglocationidResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public PutCharginglocationsCharginglocationidResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema onechargingLocationsPostRequestBodyContentApplication1jsonSchema;
    public PutCharginglocationsCharginglocationidResponse withOnechargingLocationsPostRequestBodyContentApplication1jsonSchema(openapisdk.models.shared.OnechargingLocationsPostRequestBodyContentApplication1jsonSchema onechargingLocationsPostRequestBodyContentApplication1jsonSchema) {
        this.onechargingLocationsPostRequestBodyContentApplication1jsonSchema = onechargingLocationsPostRequestBodyContentApplication1jsonSchema;
        return this;
    }
}