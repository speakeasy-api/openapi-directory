package openapisdk.models.operations;



public class GetJobUnlockCodeResponse {
    public String contentType;
    public GetJobUnlockCodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetJobUnlockCodeResult getJobUnlockCodeResult;
    public GetJobUnlockCodeResponse withGetJobUnlockCodeResult(openapisdk.models.shared.GetJobUnlockCodeResult getJobUnlockCodeResult) {
        this.getJobUnlockCodeResult = getJobUnlockCodeResult;
        return this;
    }
    public Object invalidJobStateException;
    public GetJobUnlockCodeResponse withInvalidJobStateException(Object invalidJobStateException) {
        this.invalidJobStateException = invalidJobStateException;
        return this;
    }
    public Object invalidResourceException;
    public GetJobUnlockCodeResponse withInvalidResourceException(Object invalidResourceException) {
        this.invalidResourceException = invalidResourceException;
        return this;
    }
    public Long statusCode;
    public GetJobUnlockCodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}