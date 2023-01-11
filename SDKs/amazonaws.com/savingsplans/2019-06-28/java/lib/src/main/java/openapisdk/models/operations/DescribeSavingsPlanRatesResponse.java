package openapisdk.models.operations;



public class DescribeSavingsPlanRatesResponse {
    public String contentType;
    public DescribeSavingsPlanRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSavingsPlanRatesResponse describeSavingsPlanRatesResponse;
    public DescribeSavingsPlanRatesResponse withDescribeSavingsPlanRatesResponse(openapisdk.models.shared.DescribeSavingsPlanRatesResponse describeSavingsPlanRatesResponse) {
        this.describeSavingsPlanRatesResponse = describeSavingsPlanRatesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeSavingsPlanRatesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeSavingsPlanRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeSavingsPlanRatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}