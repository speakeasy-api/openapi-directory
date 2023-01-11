package openapisdk.models.operations;



public class ExportLambdaFunctionRecommendationsResponse {
    public Object accessDeniedException;
    public ExportLambdaFunctionRecommendationsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ExportLambdaFunctionRecommendationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ExportLambdaFunctionRecommendationsResponse exportLambdaFunctionRecommendationsResponse;
    public ExportLambdaFunctionRecommendationsResponse withExportLambdaFunctionRecommendationsResponse(openapisdk.models.shared.ExportLambdaFunctionRecommendationsResponse exportLambdaFunctionRecommendationsResponse) {
        this.exportLambdaFunctionRecommendationsResponse = exportLambdaFunctionRecommendationsResponse;
        return this;
    }
    public Object internalServerException;
    public ExportLambdaFunctionRecommendationsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterValueException;
    public ExportLambdaFunctionRecommendationsResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object limitExceededException;
    public ExportLambdaFunctionRecommendationsResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object missingAuthenticationToken;
    public ExportLambdaFunctionRecommendationsResponse withMissingAuthenticationToken(Object missingAuthenticationToken) {
        this.missingAuthenticationToken = missingAuthenticationToken;
        return this;
    }
    public Object optInRequiredException;
    public ExportLambdaFunctionRecommendationsResponse withOptInRequiredException(Object optInRequiredException) {
        this.optInRequiredException = optInRequiredException;
        return this;
    }
    public Object serviceUnavailableException;
    public ExportLambdaFunctionRecommendationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ExportLambdaFunctionRecommendationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ExportLambdaFunctionRecommendationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}