package openapisdk.models.operations;



public class GetClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public GetClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public GetClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public GetClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public GetClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}