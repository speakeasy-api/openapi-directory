package openapisdk.models.operations;



public class AddClassUserResponse {
    public String contentType;
    public AddClassUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public AddClassUserResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public AddClassUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}