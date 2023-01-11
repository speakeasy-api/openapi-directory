package openapisdk.models.operations;



public class GetCustomerBalanceResponse {
    public String contentType;
    public GetCustomerBalanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public GetCustomerBalanceResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public GetCustomerBalanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public GetCustomerBalance200ApplicationJson getCustomerBalance200ApplicationJSONObject;
    public GetCustomerBalanceResponse withGetCustomerBalance200ApplicationJsonObject(GetCustomerBalance200ApplicationJson getCustomerBalance200ApplicationJSONObject) {
        this.getCustomerBalance200ApplicationJSONObject = getCustomerBalance200ApplicationJSONObject;
        return this;
    }
    public GetCustomerBalance401ApplicationJson getCustomerBalance401ApplicationJSONObject;
    public GetCustomerBalanceResponse withGetCustomerBalance401ApplicationJsonObject(GetCustomerBalance401ApplicationJson getCustomerBalance401ApplicationJSONObject) {
        this.getCustomerBalance401ApplicationJSONObject = getCustomerBalance401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public GetCustomerBalanceResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}