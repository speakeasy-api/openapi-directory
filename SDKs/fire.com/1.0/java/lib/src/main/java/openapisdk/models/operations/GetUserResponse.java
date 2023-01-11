package openapisdk.models.operations;



public class GetUserResponse {
    public String contentType;
    public GetUserResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetUserResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.OneusersGetResponses200ContentApplication1jsonSchemaItems oneusersGetResponses200ContentApplication1jsonSchemaItems;
    public GetUserResponse withOneusersGetResponses200ContentApplication1jsonSchemaItems(openapisdk.models.shared.OneusersGetResponses200ContentApplication1jsonSchemaItems oneusersGetResponses200ContentApplication1jsonSchemaItems) {
        this.oneusersGetResponses200ContentApplication1jsonSchemaItems = oneusersGetResponses200ContentApplication1jsonSchemaItems;
        return this;
    }
}