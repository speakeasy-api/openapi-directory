package openapisdk.models.operations;



public class ActivateClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public ActivateClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public ActivateClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ActivateClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ActivateClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}