package openapisdk.models.operations;



public class GetSectionsForSchoolResponse {
    public String contentType;
    public GetSectionsForSchoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSectionsForSchoolResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SectionsResponse sectionsResponse;
    public GetSectionsForSchoolResponse withSectionsResponse(openapisdk.models.shared.SectionsResponse sectionsResponse) {
        this.sectionsResponse = sectionsResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionsForSchoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}