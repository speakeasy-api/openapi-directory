package openapisdk.models.operations;



public class CreateLocationFsxWindowsResponse {
    public String contentType;
    public CreateLocationFsxWindowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateLocationFsxWindowsResponse createLocationFsxWindowsResponse;
    public CreateLocationFsxWindowsResponse withCreateLocationFsxWindowsResponse(openapisdk.models.shared.CreateLocationFsxWindowsResponse createLocationFsxWindowsResponse) {
        this.createLocationFsxWindowsResponse = createLocationFsxWindowsResponse;
        return this;
    }
    public Object internalException;
    public CreateLocationFsxWindowsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object invalidRequestException;
    public CreateLocationFsxWindowsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public CreateLocationFsxWindowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}