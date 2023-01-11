package openapisdk.models.operations;



public class GistsCheckIsStarredResponse {
    public String contentType;
    public GistsCheckIsStarredResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GistsCheckIsStarredResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsCheckIsStarredResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public java.util.Map<String, Object> gistsCheckIsStarred404ApplicationJSONObject;
    public GistsCheckIsStarredResponse withGistsCheckIsStarred404ApplicationJsonObject(java.util.Map<String, Object> gistsCheckIsStarred404ApplicationJSONObject) {
        this.gistsCheckIsStarred404ApplicationJSONObject = gistsCheckIsStarred404ApplicationJSONObject;
        return this;
    }
}