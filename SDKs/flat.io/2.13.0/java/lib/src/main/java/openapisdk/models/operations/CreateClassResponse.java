package openapisdk.models.operations;



public class CreateClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public CreateClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public CreateClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public CreateClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public CreateClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}