package openapisdk.models.operations;



public class ListStateMachinesResponse {
    public String contentType;
    public ListStateMachinesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidToken;
    public ListStateMachinesResponse withInvalidToken(Object invalidToken) {
        this.invalidToken = invalidToken;
        return this;
    }
    public openapisdk.models.shared.ListStateMachinesOutput listStateMachinesOutput;
    public ListStateMachinesResponse withListStateMachinesOutput(openapisdk.models.shared.ListStateMachinesOutput listStateMachinesOutput) {
        this.listStateMachinesOutput = listStateMachinesOutput;
        return this;
    }
    public Long statusCode;
    public ListStateMachinesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}