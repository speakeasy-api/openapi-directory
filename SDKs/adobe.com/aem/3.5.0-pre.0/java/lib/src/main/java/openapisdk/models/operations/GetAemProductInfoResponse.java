package openapisdk.models.operations;



public class GetAemProductInfoResponse {
    public String contentType;
    public GetAemProductInfoResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetAemProductInfoResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public String[] getAemProductInfoDefaultApplicationJSONStrings;
    public GetAemProductInfoResponse withGetAemProductInfoDefaultApplicationJsonStrings(String[] getAemProductInfoDefaultApplicationJSONStrings) {
        this.getAemProductInfoDefaultApplicationJSONStrings = getAemProductInfoDefaultApplicationJSONStrings;
        return this;
    }
}