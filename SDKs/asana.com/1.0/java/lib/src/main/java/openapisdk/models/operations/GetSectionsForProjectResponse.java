package openapisdk.models.operations;



public class GetSectionsForProjectResponse {
    public String contentType;
    public GetSectionsForProjectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetSectionsForProjectResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetSectionsForProjectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetSectionsForProject200ApplicationJson getSectionsForProject200ApplicationJSONObject;
    public GetSectionsForProjectResponse withGetSectionsForProject200ApplicationJsonObject(GetSectionsForProject200ApplicationJson getSectionsForProject200ApplicationJSONObject) {
        this.getSectionsForProject200ApplicationJSONObject = getSectionsForProject200ApplicationJSONObject;
        return this;
    }
}