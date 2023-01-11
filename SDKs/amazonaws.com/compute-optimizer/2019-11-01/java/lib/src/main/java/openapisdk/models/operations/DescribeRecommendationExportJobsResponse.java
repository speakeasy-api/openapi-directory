package openapisdk.models.operations;



public class DescribeRecommendationExportJobsResponse {
    public Object accessDeniedException;
    public DescribeRecommendationExportJobsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeRecommendationExportJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRecommendationExportJobsResponse describeRecommendationExportJobsResponse;
    public DescribeRecommendationExportJobsResponse withDescribeRecommendationExportJobsResponse(openapisdk.models.shared.DescribeRecommendationExportJobsResponse describeRecommendationExportJobsResponse) {
        this.describeRecommendationExportJobsResponse = describeRecommendationExportJobsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRecommendationExportJobsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public DescribeRecommendationExportJobsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object missingAuthenticationToken;
    public DescribeRecommendationExportJobsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public DescribeRecommendationExportJobsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRecommendationExportJobsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeRecommendationExportJobsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeRecommendationExportJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRecommendationExportJobsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}