package openapisdk.models.operations;



public class PostAlmawsV1TaskListsPrintoutsResponse {
    public byte[] body;
    public PostAlmawsV1TaskListsPrintoutsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public PostAlmawsV1TaskListsPrintoutsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, String[]> headers;
    public PostAlmawsV1TaskListsPrintoutsResponse withHeaders(java.util.Map<String, String[]> headers) {
        this.headers = headers;
        return this;
    }
    public Long statusCode;
    public PostAlmawsV1TaskListsPrintoutsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
    public PostAlmawsV1TaskListsPrintoutsResponse withOnealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema(openapisdk.models.shared.Onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema) {
        this.onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema = onealmaws1v11taskLists1printoutsGetResponses200ContentApplication1jsonSchema;
        return this;
    }
}