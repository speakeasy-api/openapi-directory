package openapisdk.models.operations;



public class GetApiV1ChaptersChapterNumberVersesResponse {
    public String contentType;
    public GetApiV1ChaptersChapterNumberVersesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV1ChaptersChapterNumberVersesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerseSchema verseSchema;
    public GetApiV1ChaptersChapterNumberVersesResponse withVerseSchema(openapisdk.models.shared.VerseSchema verseSchema) {
        this.verseSchema = verseSchema;
        return this;
    }
}