package openapisdk.models.operations;



public class ChecksUpdateResponse {
    public String contentType;
    public ChecksUpdateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ChecksUpdateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.CheckRun checkRun;
    public ChecksUpdateResponse withCheckRun(openapisdk.models.shared.CheckRun checkRun) {
        this.checkRun = checkRun;
        return this;
    }
}