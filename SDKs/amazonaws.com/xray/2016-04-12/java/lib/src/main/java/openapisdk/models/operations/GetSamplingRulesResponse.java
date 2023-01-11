package openapisdk.models.operations;



public class GetSamplingRulesResponse {
    public String contentType;
    public GetSamplingRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSamplingRulesResult getSamplingRulesResult;
    public GetSamplingRulesResponse withGetSamplingRulesResult(openapisdk.models.shared.GetSamplingRulesResult getSamplingRulesResult) {
        this.getSamplingRulesResult = getSamplingRulesResult;
        return this;
    }
    public Object invalidRequestException;
    public GetSamplingRulesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public GetSamplingRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public GetSamplingRulesResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}