package openapisdk.models.operations;



public class GetMeResponse {
    public String contentType;
    public GetMeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.MeModel meModel;
    public GetMeResponse withMeModel(openapisdk.models.shared.MeModel meModel) {
        this.meModel = meModel;
        return this;
    }
    public Long statusCode;
    public GetMeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}