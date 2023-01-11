package openapisdk.models.operations;



public class GetSectionsForDistrictResponse {
    public String contentType;
    public GetSectionsForDistrictResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.NotFound notFound;
    public GetSectionsForDistrictResponse withNotFound(openapisdk.models.shared.NotFound notFound) {
        this.notFound = notFound;
        return this;
    }
    public openapisdk.models.shared.SectionsResponse sectionsResponse;
    public GetSectionsForDistrictResponse withSectionsResponse(openapisdk.models.shared.SectionsResponse sectionsResponse) {
        this.sectionsResponse = sectionsResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionsForDistrictResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}