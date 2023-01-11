package openapisdk.models.operations;



public class CreateLongTermPricingResponse {
    public String contentType;
    public CreateLongTermPricingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLongTermPricingResult createLongTermPricingResult;
    public CreateLongTermPricingResponse withCreateLongTermPricingResult(openapisdk.models.shared.CreateLongTermPricingResult createLongTermPricingResult) {
        this.createLongTermPricingResult = createLongTermPricingResult;
        return this;
    }
    public Object invalidResourceException;
    public CreateLongTermPricingResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public CreateLongTermPricingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}