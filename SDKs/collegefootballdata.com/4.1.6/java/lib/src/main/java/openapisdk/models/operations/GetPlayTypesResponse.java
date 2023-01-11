package openapisdk.models.operations;



public class GetPlayTypesResponse {
    public String contentType;
    public GetPlayTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayType[] playTypes;
    public GetPlayTypesResponse withPlayTypes(openapisdk.models.shared.PlayType[] playTypes) {
        this.playTypes = playTypes;
        return this;
    }
    public Long statusCode;
    public GetPlayTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}