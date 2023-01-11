package openapisdk.models.operations;



public class ListLongTermPricingResponse {
    public String contentType;
    public ListLongTermPricingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListLongTermPricingResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidResourceException;
    public ListLongTermPricingResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public openapisdk.models.shared.ListLongTermPricingResult listLongTermPricingResult;
    public ListLongTermPricingResponse withListLongTermPricingResult(openapisdk.models.shared.ListLongTermPricingResult listLongTermPricingResult) {
        this.listLongTermPricingResult = listLongTermPricingResult;
        return this;
    }
    public Long statusCode;
    public ListLongTermPricingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}