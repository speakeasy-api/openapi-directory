package openapisdk.models.operations;



public class GetLegalSearchResponse {
    public String contentType;
    public GetLegalSearchResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetLegalSearchResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLegalSearchDefaultApplicationJson getLegalSearchDefaultApplicationJSONObject;
    public GetLegalSearchResponse withGetLegalSearchDefaultApplicationJsonObject(GetLegalSearchDefaultApplicationJson getLegalSearchDefaultApplicationJSONObject) {
        this.getLegalSearchDefaultApplicationJSONObject = getLegalSearchDefaultApplicationJSONObject;
        return this;
    }
}