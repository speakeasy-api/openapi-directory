package openapisdk.models.operations;



public class GetAvailableUpgradesResponse {
    public String contentType;
    public GetAvailableUpgradesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetAvailableUpgradesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetAvailableUpgradesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetAvailableUpgrades200ApplicationJson getAvailableUpgrades200ApplicationJSONObject;
    public GetAvailableUpgradesResponse withGetAvailableUpgrades200ApplicationJsonObject(GetAvailableUpgrades200ApplicationJson getAvailableUpgrades200ApplicationJSONObject) {
        this.getAvailableUpgrades200ApplicationJSONObject = getAvailableUpgrades200ApplicationJSONObject;
        return this;
    }
    public GetAvailableUpgrades401ApplicationJson getAvailableUpgrades401ApplicationJSONObject;
    public GetAvailableUpgradesResponse withGetAvailableUpgrades401ApplicationJsonObject(GetAvailableUpgrades401ApplicationJson getAvailableUpgrades401ApplicationJSONObject) {
        this.getAvailableUpgrades401ApplicationJSONObject = getAvailableUpgrades401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetAvailableUpgradesResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}