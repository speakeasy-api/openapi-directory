package openapisdk.models.operations;



public class PollForDecisionTaskResponse {
    public String contentType;
    public PollForDecisionTaskResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DecisionTask decisionTask;
    public PollForDecisionTaskResponse withDecisionTask(openapisdk.models.shared.DecisionTask decisionTask) {
        this.decisionTask = decisionTask;
        return this;
    }
    public Object limitExceededFault;
    public PollForDecisionTaskResponse withLimitExceededFault(Object limitExceededFault) {
        this.limitExceededFault = limitExceededFault;
        return this;
    }
    public Object operationNotPermittedFault;
    public PollForDecisionTaskResponse withOperationNotPermittedFault(Object operationNotPermittedFault) {
        this.operationNotPermittedFault = operationNotPermittedFault;
        return this;
    }
    public Long statusCode;
    public PollForDecisionTaskResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unknownResourceFault;
    public PollForDecisionTaskResponse withUnknownResourceFault(Object unknownResourceFault) {
        this.unknownResourceFault = unknownResourceFault;
        return this;
    }
}