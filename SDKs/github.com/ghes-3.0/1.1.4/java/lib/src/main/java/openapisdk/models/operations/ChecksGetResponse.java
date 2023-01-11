package openapisdk.models.operations;



public class ChecksGetResponse {
    public String contentType;
    public ChecksGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChecksGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckRun checkRun;
    public ChecksGetResponse withCheckRun(openapisdk.models.shared.CheckRun checkRun) {
        this.checkRun = checkRun;
        return this;
    }
}