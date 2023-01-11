package openapisdk.models.operations;



public class GetFavoritesForUserResponse {
    public String contentType;
    public GetFavoritesForUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ErrorResponse errorResponse;
    public GetFavoritesForUserResponse withErrorResponse(openapisdk.models.shared.ErrorResponse errorResponse) {
        this.errorResponse = errorResponse;
        return this;
    }
    public Long statusCode;
    public GetFavoritesForUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetFavoritesForUser200ApplicationJson getFavoritesForUser200ApplicationJSONObject;
    public GetFavoritesForUserResponse withGetFavoritesForUser200ApplicationJsonObject(GetFavoritesForUser200ApplicationJson getFavoritesForUser200ApplicationJSONObject) {
        this.getFavoritesForUser200ApplicationJSONObject = getFavoritesForUser200ApplicationJSONObject;
        return this;
    }
}