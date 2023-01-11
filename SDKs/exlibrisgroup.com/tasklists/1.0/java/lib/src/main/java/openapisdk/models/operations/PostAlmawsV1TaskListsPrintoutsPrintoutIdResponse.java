package openapisdk.models.operations;



public class PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse {
    public byte[] body;
    public PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems;
    public PostAlmawsV1TaskListsPrintoutsPrintoutIdResponse withOnealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems(openapisdk.models.shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems) {
        this.onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems = onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchemaPropertiesPrintoutItems;
        return this;
    }
}