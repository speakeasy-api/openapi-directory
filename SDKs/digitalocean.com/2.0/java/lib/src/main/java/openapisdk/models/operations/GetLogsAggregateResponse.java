package openapisdk.models.operations;



public class GetLogsAggregateResponse {
    public String contentType;
    public GetLogsAggregateResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetLogsAggregateResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetLogsAggregateResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetLogsAggregate401ApplicationJson getLogsAggregate401ApplicationJSONObject;
    public GetLogsAggregateResponse withGetLogsAggregate401ApplicationJsonObject(GetLogsAggregate401ApplicationJson getLogsAggregate401ApplicationJSONObject) {
        this.getLogsAggregate401ApplicationJSONObject = getLogsAggregate401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetLogsAggregateResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema;
    public GetLogsAggregateResponse withOnev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema) {
        this.onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema = onev21apps1Percent7BappIdPercent7D1deployments1Percent7BdeploymentIdPercent7D1components1Percent7BcomponentNamePercent7D1logsGetResponses200ContentApplication1jsonSchema;
        return this;
    }
}