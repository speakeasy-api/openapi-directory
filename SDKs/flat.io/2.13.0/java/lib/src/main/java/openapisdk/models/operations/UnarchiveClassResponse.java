package openapisdk.models.operations;



public class UnarchiveClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public UnarchiveClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public UnarchiveClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public UnarchiveClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public UnarchiveClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}