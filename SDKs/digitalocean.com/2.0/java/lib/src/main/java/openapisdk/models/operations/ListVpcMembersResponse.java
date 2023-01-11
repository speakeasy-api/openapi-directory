package openapisdk.models.operations;



public class ListVpcMembersResponse {
    public String contentType;
    public ListVpcMembersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public ListVpcMembersResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public ListVpcMembersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public ListVpcMembers200ApplicationJson listVpcMembers200ApplicationJSONObject;
    public ListVpcMembersResponse withListVpcMembers200ApplicationJsonObject(ListVpcMembers200ApplicationJson listVpcMembers200ApplicationJSONObject) {
        this.listVpcMembers200ApplicationJSONObject = listVpcMembers200ApplicationJSONObject;
        return this;
    }
    public ListVpcMembers401ApplicationJson listVpcMembers401ApplicationJSONObject;
    public ListVpcMembersResponse withListVpcMembers401ApplicationJsonObject(ListVpcMembers401ApplicationJson listVpcMembers401ApplicationJSONObject) {
        this.listVpcMembers401ApplicationJSONObject = listVpcMembers401ApplicationJSONObject;
        return this;
    }
    public openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema;
    public ListVpcMembersResponse withOnev211ClicksGetResponses401ContentApplication1jsonSchema(openapisdk.models.shared.Onev211ClicksGetResponses401ContentApplication1jsonSchema onev211ClicksGetResponses401ContentApplication1jsonSchema) {
        this.onev211ClicksGetResponses401ContentApplication1jsonSchema = onev211ClicksGetResponses401ContentApplication1jsonSchema;
        return this;
    }
}