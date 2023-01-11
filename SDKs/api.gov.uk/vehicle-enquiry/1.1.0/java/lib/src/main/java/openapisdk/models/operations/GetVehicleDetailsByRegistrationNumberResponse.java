package openapisdk.models.operations;



public class GetVehicleDetailsByRegistrationNumberResponse {
    public String contentType;
    public GetVehicleDetailsByRegistrationNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetVehicleDetailsByRegistrationNumberResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetVehicleDetailsByRegistrationNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Vehicle vehicle;
    public GetVehicleDetailsByRegistrationNumberResponse withVehicle(openapisdk.models.shared.Vehicle vehicle) {
        this.vehicle = vehicle;
        return this;
    }
}