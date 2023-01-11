package openapisdk.models.operations;



public class GetModelNamesGetModelsGetResponse {
    public String contentType;
    public GetModelNamesGetModelsGetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.HttpValidationError httpValidationError;
    public GetModelNamesGetModelsGetResponse withHttpValidationError(openapisdk.models.shared.HttpValidationError httpValidationError) {
        this.httpValidationError = httpValidationError;
        return this;
    }
    public openapisdk.models.shared.ModelResp modelResp;
    public GetModelNamesGetModelsGetResponse withModelResp(openapisdk.models.shared.ModelResp modelResp) {
        this.modelResp = modelResp;
        return this;
    }
    public Long statusCode;
    public GetModelNamesGetModelsGetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}