package openapisdk.models.operations;



public class DescribeSeverityLevelsResponse {
    public String contentType;
    public DescribeSeverityLevelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeSeverityLevelsResponse describeSeverityLevelsResponse;
    public DescribeSeverityLevelsResponse withDescribeSeverityLevelsResponse(openapisdk.models.shared.DescribeSeverityLevelsResponse describeSeverityLevelsResponse) {
        this.describeSeverityLevelsResponse = describeSeverityLevelsResponse;
        return this;
    }
    public Object internalServerError;
    public DescribeSeverityLevelsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Long statusCode;
    public DescribeSeverityLevelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}