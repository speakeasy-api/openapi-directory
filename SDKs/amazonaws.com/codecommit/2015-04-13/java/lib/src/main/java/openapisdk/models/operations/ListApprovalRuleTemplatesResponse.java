package openapisdk.models.operations;



public class ListApprovalRuleTemplatesResponse {
    public String contentType;
    public ListApprovalRuleTemplatesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidContinuationTokenException;
    public ListApprovalRuleTemplatesResponse withInvalidContinuationTokenException(Object invalidContinuationTokenException) {
        this.invalidContinuationTokenException = invalidContinuationTokenException;
        return this;
    }
    public Object invalidMaxResultsException;
    public ListApprovalRuleTemplatesResponse withInvalidMaxResultsException(Object invalidMaxResultsException) {
        this.invalidMaxResultsException = invalidMaxResultsException;
        return this;
    }
    public openapisdk.models.shared.ListApprovalRuleTemplatesOutput listApprovalRuleTemplatesOutput;
    public ListApprovalRuleTemplatesResponse withListApprovalRuleTemplatesOutput(openapisdk.models.shared.ListApprovalRuleTemplatesOutput listApprovalRuleTemplatesOutput) {
        this.listApprovalRuleTemplatesOutput = listApprovalRuleTemplatesOutput;
        return this;
    }
    public Long statusCode;
    public ListApprovalRuleTemplatesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}