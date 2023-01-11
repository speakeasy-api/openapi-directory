package openapisdk.models.operations;



public class AddUserResponse {
    public String contentType;
    public AddUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public AddUserResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public AddUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public AddUser201ApplicationJson addUser201ApplicationJSONObject;
    public AddUserResponse withAddUser201ApplicationJsonObject(AddUser201ApplicationJson addUser201ApplicationJSONObject) {
        this.addUser201ApplicationJSONObject = addUser201ApplicationJSONObject;
        return this;
    }
    public AddUser401ApplicationJson addUser401ApplicationJSONObject;
    public AddUserResponse withAddUser401ApplicationJsonObject(AddUser401ApplicationJson addUser401ApplicationJSONObject) {
        this.addUser401ApplicationJSONObject = addUser401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public AddUserResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}