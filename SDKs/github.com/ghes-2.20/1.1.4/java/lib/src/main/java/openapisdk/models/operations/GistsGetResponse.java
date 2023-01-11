package openapisdk.models.operations;



public class GistsGetResponse {
    public String contentType;
    public GistsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GistsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public GistsGetResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public openapisdk.models.shared.GistSimple gistSimple;
    public GistsGetResponse withGistSimple(openapisdk.models.shared.GistSimple gistSimple) {
        this.gistSimple = gistSimple;
        return this;
    }
    public GistsGet403ApplicationJson gistsGet403ApplicationJSONObject;
    public GistsGetResponse withGistsGet403ApplicationJsonObject(GistsGet403ApplicationJson gistsGet403ApplicationJSONObject) {
        this.gistsGet403ApplicationJSONObject = gistsGet403ApplicationJSONObject;
        return this;
    }
}