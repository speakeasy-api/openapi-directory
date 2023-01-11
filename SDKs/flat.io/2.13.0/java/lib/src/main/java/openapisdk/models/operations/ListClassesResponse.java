package openapisdk.models.operations;



public class ListClassesResponse {
    public openapisdk.models.shared.ClassDetails[] classDetails;
    public ListClassesResponse withClassDetails(openapisdk.models.shared.ClassDetails[] classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public ListClassesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ListClassesResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ListClassesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}