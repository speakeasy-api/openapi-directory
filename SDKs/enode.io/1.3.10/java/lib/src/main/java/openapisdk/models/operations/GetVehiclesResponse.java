package openapisdk.models.operations;



public class GetVehiclesResponse {
    public String contentType;
    public GetVehiclesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetVehiclesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[] onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas;
    public GetVehiclesResponse withOnevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas(openapisdk.models.shared.Onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchema[] onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas) {
        this.onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas = onevehicles1Percent7BvehicleIdPercent7DGetResponses200ContentApplication1jsonSchemas;
        return this;
    }
}