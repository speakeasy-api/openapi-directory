package openapisdk.models.operations;



public class GetVehicleSeenVehicleSeenGetResponse {
    public openapisdk.models.shared.BooleanResp booleanResp;
    public GetVehicleSeenVehicleSeenGetResponse withBooleanResp(openapisdk.models.shared.BooleanResp booleanResp) {
        this.booleanResp = booleanResp;
        return this;
    }
    public String contentType;
    public GetVehicleSeenVehicleSeenGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetVehicleSeenVehicleSeenGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetVehicleSeenVehicleSeenGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}