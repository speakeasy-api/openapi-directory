package openapisdk.models.operations;



public class GetLambdaFunctionRecommendationsResponse {
    public Object accessDeniedException;
    public GetLambdaFunctionRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetLambdaFunctionRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetLambdaFunctionRecommendationsResponse getLambdaFunctionRecommendationsResponse;
    public GetLambdaFunctionRecommendationsResponse withGetLambdaFunctionRecommendationsResponse(openapisdk.models.shared.GetLambdaFunctionRecommendationsResponse getLambdaFunctionRecommendationsResponse) {
        this.getLambdaFunctionRecommendationsResponse = getLambdaFunctionRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public GetLambdaFunctionRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public GetLambdaFunctionRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public GetLambdaFunctionRecommendationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingAuthenticationToken;
    public GetLambdaFunctionRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public GetLambdaFunctionRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetLambdaFunctionRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetLambdaFunctionRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public GetLambdaFunctionRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}