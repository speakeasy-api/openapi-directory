package openapisdk.models.operations;



public class GetStatCategoriesResponse {
    public String contentType;
    public GetStatCategoriesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetStatCategoriesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getStatCategories200ApplicationJSONStrings;
    public GetStatCategoriesResponse withGetStatCategories200ApplicationJsonStrings(String[] getStatCategories200ApplicationJSONStrings) {
        this.getStatCategories200ApplicationJSONStrings = getStatCategories200ApplicationJSONStrings;
        return this;
    }
}