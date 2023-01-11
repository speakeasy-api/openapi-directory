package openapisdk.models.operations;



public class UpdateLongTermPricingResponse {
    public String contentType;
    public UpdateLongTermPricingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidResourceException;
    public UpdateLongTermPricingResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public UpdateLongTermPricingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateLongTermPricingResult;
    public UpdateLongTermPricingResponse withUpdateLongTermPricingResult(java.util.Map<String, Object> updateLongTermPricingResult) {
        this.updateLongTermPricingResult = updateLongTermPricingResult;
        return this;
    }
}