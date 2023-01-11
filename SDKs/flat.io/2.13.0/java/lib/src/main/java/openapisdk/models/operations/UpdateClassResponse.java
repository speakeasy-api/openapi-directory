package openapisdk.models.operations;



public class UpdateClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public UpdateClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public UpdateClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UpdateClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public UpdateClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}