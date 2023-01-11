package openapisdk.models.operations;



public class DaysSupplyDaysSupplyGetResponse {
    public String contentType;
    public DaysSupplyDaysSupplyGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericResponse genericResponse;
    public DaysSupplyDaysSupplyGetResponse withGenericResponse(openapisdk.models.shared.GenericResponse genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public DaysSupplyDaysSupplyGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public DaysSupplyDaysSupplyGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}