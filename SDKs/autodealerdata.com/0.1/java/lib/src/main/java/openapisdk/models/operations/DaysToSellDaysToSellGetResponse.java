package openapisdk.models.operations;



public class DaysToSellDaysToSellGetResponse {
    public String contentType;
    public DaysToSellDaysToSellGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GenericResponse genericResponse;
    public DaysToSellDaysToSellGetResponse withGenericResponse(openapisdk.models.shared.GenericResponse genericResponse) {
        this.genericResponse = genericResponse;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public DaysToSellDaysToSellGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public DaysToSellDaysToSellGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}