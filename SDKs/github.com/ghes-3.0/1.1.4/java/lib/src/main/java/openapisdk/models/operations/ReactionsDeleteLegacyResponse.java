package openapisdk.models.operations;



public class ReactionsDeleteLegacyResponse {
    public String contentType;
    public ReactionsDeleteLegacyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ReactionsDeleteLegacyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.BasicError basicError;
    public ReactionsDeleteLegacyResponse withBasicError(openapisdk.models.shared.BasicError basicError) {
        this.basicError = basicError;
        return this;
    }
    public ReactionsDeleteLegacy415ApplicationJson reactionsDeleteLegacy415ApplicationJSONObject;
    public ReactionsDeleteLegacyResponse withReactionsDeleteLegacy415ApplicationJsonObject(ReactionsDeleteLegacy415ApplicationJson reactionsDeleteLegacy415ApplicationJSONObject) {
        this.reactionsDeleteLegacy415ApplicationJSONObject = reactionsDeleteLegacy415ApplicationJSONObject;
        return this;
    }
}