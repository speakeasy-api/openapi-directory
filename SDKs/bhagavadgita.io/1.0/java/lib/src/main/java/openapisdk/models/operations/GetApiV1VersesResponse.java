package openapisdk.models.operations;



public class GetApiV1VersesResponse {
    public String contentType;
    public GetApiV1VersesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV1VersesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerseSchema verseSchema;
    public GetApiV1VersesResponse withVerseSchema(openapisdk.models.shared.VerseSchema verseSchema) {
        this.verseSchema = verseSchema;
        return this;
    }
}