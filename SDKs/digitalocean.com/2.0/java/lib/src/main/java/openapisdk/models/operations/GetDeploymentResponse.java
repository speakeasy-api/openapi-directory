package openapisdk.models.operations;



public class GetDeploymentResponse {
    public String contentType;
    public GetDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetDeploymentResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetDeployment401ApplicationJson getDeployment401ApplicationJSONObject;
    public GetDeploymentResponse withGetDeployment401ApplicationJsonObject(GetDeployment401ApplicationJson getDeployment401ApplicationJSONObject) {
        this.getDeployment401ApplicationJSONObject = getDeployment401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetDeploymentResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema;
    public GetDeploymentResponse withOnev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema) {
        this.onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema = onev21apps1Percent7BappIdPercent7D1deploymentsPostResponses200ContentApplication1jsonSchema;
        return this;
    }
}