package openapisdk.models.operations;



public class EnrollClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public EnrollClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public EnrollClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public EnrollClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public EnrollClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}