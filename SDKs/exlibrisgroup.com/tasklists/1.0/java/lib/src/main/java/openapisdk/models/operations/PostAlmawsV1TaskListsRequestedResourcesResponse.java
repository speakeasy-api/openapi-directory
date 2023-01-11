package openapisdk.models.operations;



public class PostAlmawsV1TaskListsRequestedResourcesResponse {
    public byte[] body;
    public PostAlmawsV1TaskListsRequestedResourcesResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAlmawsV1TaskListsRequestedResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAlmawsV1TaskListsRequestedResourcesResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostAlmawsV1TaskListsRequestedResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema;
    public PostAlmawsV1TaskListsRequestedResourcesResponse withOnealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema) {
        this.onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema = onealmaws1v11taskLists1requestedResourcesGetResponses200ContentApplication1jsonSchema;
        return this;
    }
}