package openapisdk.models.operations;



public class DescribeSavingsPlansResponse {
    public String contentType;
    public DescribeSavingsPlansResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSavingsPlansResponse describeSavingsPlansResponse;
    public DescribeSavingsPlansResponse withDescribeSavingsPlansResponse(openapisdk.models.shared.DescribeSavingsPlansResponse describeSavingsPlansResponse) {
        this.describeSavingsPlansResponse = describeSavingsPlansResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeSavingsPlansResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Long statusCode;
    public DescribeSavingsPlansResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeSavingsPlansResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}