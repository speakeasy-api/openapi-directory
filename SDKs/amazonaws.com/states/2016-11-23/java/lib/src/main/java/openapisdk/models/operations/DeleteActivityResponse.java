package openapisdk.models.operations;



public class DeleteActivityResponse {
    public String contentType;
    public DeleteActivityResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteActivityOutput;
    public DeleteActivityResponse withDeleteActivityOutput(java.util.Map<String, Object> deleteActivityOutput) {
        this.deleteActivityOutput = deleteActivityOutput;
        return this;
    }
    public Object invalidArn;
    public DeleteActivityResponse withInvalidArn(Object invalidArn) {
        this.invalidArn = invalidArn;
        return this;
    }
    public Long statusCode;
    public DeleteActivityResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}