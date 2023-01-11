package openapisdk.models.operations;



public class DescribeComponentConfigurationRecommendationResponse {
    public String contentType;
    public DescribeComponentConfigurationRecommendationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeComponentConfigurationRecommendationResponse describeComponentConfigurationRecommendationResponse;
    public DescribeComponentConfigurationRecommendationResponse withDescribeComponentConfigurationRecommendationResponse(openapisdk.models.shared.DescribeComponentConfigurationRecommendationResponse describeComponentConfigurationRecommendationResponse) {
        this.describeComponentConfigurationRecommendationResponse = describeComponentConfigurationRecommendationResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeComponentConfigurationRecommendationResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeComponentConfigurationRecommendationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeComponentConfigurationRecommendationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DescribeComponentConfigurationRecommendationResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}