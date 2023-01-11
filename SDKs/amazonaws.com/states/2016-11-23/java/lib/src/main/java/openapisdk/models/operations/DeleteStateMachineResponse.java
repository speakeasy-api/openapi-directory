package openapisdk.models.operations;



public class DeleteStateMachineResponse {
    public String contentType;
    public DeleteStateMachineResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteStateMachineOutput;
    public DeleteStateMachineResponse withDeleteStateMachineOutput(java.util.Map<String, Object> deleteStateMachineOutput) {
        this.deleteStateMachineOutput = deleteStateMachineOutput;
        return this;
    }
    public Object invalidArn;
    public DeleteStateMachineResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public DeleteStateMachineResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}