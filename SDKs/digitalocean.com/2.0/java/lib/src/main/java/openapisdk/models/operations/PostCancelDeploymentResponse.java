package openapisdk.models.operations;



public class PostCancelDeploymentResponse {
    public String contentType;
    public PostCancelDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostCancelDeploymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostCancelDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public PostCancelDeployment401ApplicationJson postCancelDeployment401ApplicationJSONObject;
    public PostCancelDeploymentResponse withPostCancelDeployment401ApplicationJsonObject(PostCancelDeployment401ApplicationJson postCancelDeployment401ApplicationJSONObject) {
        this.postCancelDeployment401ApplicationJSONObject = postCancelDeployment401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public PostCancelDeploymentResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema;
    public PostCancelDeploymentResponse withOnev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema) {
        this.onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema = onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema;
        return this;
    }
}