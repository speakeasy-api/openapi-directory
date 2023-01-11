package openapisdk.models.operations;



public class DeleteEvaluationResultsResponse {
    public String contentType;
    public DeleteEvaluationResultsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteEvaluationResultsResponse;
    public DeleteEvaluationResultsResponse withDeleteEvaluationResultsResponse(java.util.Map<String, Object> deleteEvaluationResultsResponse) {
        this.deleteEvaluationResultsResponse = deleteEvaluationResultsResponse;
        return this;
    }
    public Object noSuchConfigRuleException;
    public DeleteEvaluationResultsResponse withNoSuchConfigRuleException(Object noSuchConfigRuleException) {
        this.noSuchConfigRuleException = noSuchConfigRuleException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteEvaluationResultsResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteEvaluationResultsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}