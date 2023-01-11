package openapisdk.models.operations;



public class GetSectionsForStudentResponse {
    public String contentType;
    public GetSectionsForStudentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSectionsForStudentResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SectionsResponse sectionsResponse;
    public GetSectionsForStudentResponse withSectionsResponse(openapisdk.models.shared.SectionsResponse sectionsResponse) {
        this.sectionsResponse = sectionsResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionsForStudentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}