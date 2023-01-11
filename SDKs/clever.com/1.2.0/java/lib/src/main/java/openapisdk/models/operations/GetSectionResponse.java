package openapisdk.models.operations;



public class GetSectionResponse {
    public String contentType;
    public GetSectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSectionResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SectionResponse sectionResponse;
    public GetSectionResponse withSectionResponse(openapisdk.models.shared.SectionResponse sectionResponse) {
        this.sectionResponse = sectionResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}