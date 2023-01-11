package openapisdk.models.operations;



public class GetV1Response {
    public String contentType;
    public GetV1Response withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetV1Response withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.InlineResponse200 inlineResponse200;
    public GetV1Response withInlineResponse200(openapisdk.models.shared.InlineResponse200 inlineResponse200) {
        this.inlineResponse200 = inlineResponse200;
        return this;
    }
}