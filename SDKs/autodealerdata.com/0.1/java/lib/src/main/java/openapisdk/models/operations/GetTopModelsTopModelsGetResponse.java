package openapisdk.models.operations;



public class GetTopModelsTopModelsGetResponse {
    public String contentType;
    public GetTopModelsTopModelsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetTopModelsTopModelsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public Long statusCode;
    public GetTopModelsTopModelsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TopModelResp topModelResp;
    public GetTopModelsTopModelsGetResponse withTopModelResp(openapisdk.models.shared.TopModelResp topModelResp) {
        this.topModelResp = topModelResp;
        return this;
    }
}