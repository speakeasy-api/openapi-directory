package openapisdk.models.operations;



public class GetSectionsForTeacherResponse {
    public String contentType;
    public GetSectionsForTeacherResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSectionsForTeacherResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SectionsResponse sectionsResponse;
    public GetSectionsForTeacherResponse withSectionsResponse(openapisdk.models.shared.SectionsResponse sectionsResponse) {
        this.sectionsResponse = sectionsResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionsForTeacherResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}