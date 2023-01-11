package openapisdk.models.operations;



public class DescribeSavingsPlansOfferingsResponse {
    public String contentType;
    public DescribeSavingsPlansOfferingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSavingsPlansOfferingsResponse describeSavingsPlansOfferingsResponse;
    public DescribeSavingsPlansOfferingsResponse withDescribeSavingsPlansOfferingsResponse(openapisdk.models.shared.DescribeSavingsPlansOfferingsResponse describeSavingsPlansOfferingsResponse) {
        this.describeSavingsPlansOfferingsResponse = describeSavingsPlansOfferingsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSavingsPlansOfferingsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeSavingsPlansOfferingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeSavingsPlansOfferingsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}