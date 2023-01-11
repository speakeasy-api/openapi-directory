package openapisdk.models.operations;



public class GetSearchV1FieldsResponse {
    public byte[] body;
    public GetSearchV1FieldsResponse withBody(byte[] body) {
        this.body = body;
        return this;
    }
    public String contentType;
    public GetSearchV1FieldsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public String[] fields;
    public GetSearchV1FieldsResponse withFields(String[] fields) {
        this.fields = fields;
        return this;
    }
    public Long statusCode;
    public GetSearchV1FieldsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}