package openapisdk.models.operations;



public class GetPlayStatTypesResponse {
    public String contentType;
    public GetPlayStatTypesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PlayStatType[] playStatTypes;
    public GetPlayStatTypesResponse withPlayStatTypes(openapisdk.models.shared.PlayStatType[] playStatTypes) {
        this.playStatTypes = playStatTypes;
        return this;
    }
    public Long statusCode;
    public GetPlayStatTypesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}