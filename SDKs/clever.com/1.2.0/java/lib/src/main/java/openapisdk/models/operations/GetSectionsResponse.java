package openapisdk.models.operations;



public class GetSectionsResponse {
    public String contentType;
    public GetSectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.SectionsResponse sectionsResponse;
    public GetSectionsResponse withSectionsResponse(openapisdk.models.shared.SectionsResponse sectionsResponse) {
        this.sectionsResponse = sectionsResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}