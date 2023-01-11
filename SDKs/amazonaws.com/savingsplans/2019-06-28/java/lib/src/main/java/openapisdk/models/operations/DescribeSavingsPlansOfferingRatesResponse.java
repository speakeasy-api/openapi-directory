package openapisdk.models.operations;



public class DescribeSavingsPlansOfferingRatesResponse {
    public String contentType;
    public DescribeSavingsPlansOfferingRatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSavingsPlansOfferingRatesResponse describeSavingsPlansOfferingRatesResponse;
    public DescribeSavingsPlansOfferingRatesResponse withDescribeSavingsPlansOfferingRatesResponse(openapisdk.models.shared.DescribeSavingsPlansOfferingRatesResponse describeSavingsPlansOfferingRatesResponse) {
        this.describeSavingsPlansOfferingRatesResponse = describeSavingsPlansOfferingRatesResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSavingsPlansOfferingRatesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeSavingsPlansOfferingRatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeSavingsPlansOfferingRatesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}