package openapisdk.models.operations;



public class ChecksCreateResponse {
    public String contentType;
    public ChecksCreateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChecksCreateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckRun checkRun;
    public ChecksCreateResponse withCheckRun(openapisdk.models.shared.CheckRun checkRun) {
        this.checkRun = checkRun;
        return this;
    }
}