package openapisdk.models.operations;



public class GetSystemInfoResponse {
    public String contentType;
    public GetSystemInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.Error error;
    public GetSystemInfoResponse withError(openapisdk.models.shared.Error error) {
        this.error = error;
        return this;
    }
    public Long statusCode;
    public GetSystemInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SystemInfo systemInfo;
    public GetSystemInfoResponse withSystemInfo(openapisdk.models.shared.SystemInfo systemInfo) {
        this.systemInfo = systemInfo;
        return this;
    }
}