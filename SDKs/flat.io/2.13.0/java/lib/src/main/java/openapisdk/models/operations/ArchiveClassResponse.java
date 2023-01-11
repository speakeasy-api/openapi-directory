package openapisdk.models.operations;



public class ArchiveClassResponse {
    public openapisdk.models.shared.ClassDetails classDetails;
    public ArchiveClassResponse withClassDetails(openapisdk.models.shared.ClassDetails classDetails) {
        this.classDetails = classDetails;
        return this;
    }
    public String contentType;
    public ArchiveClassResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FlatErrorResponse flatErrorResponse;
    public ArchiveClassResponse withFlatErrorResponse(openapisdk.models.shared.FlatErrorResponse flatErrorResponse) {
        this.flatErrorResponse = flatErrorResponse;
        return this;
    }
    public Long statusCode;
    public ArchiveClassResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}