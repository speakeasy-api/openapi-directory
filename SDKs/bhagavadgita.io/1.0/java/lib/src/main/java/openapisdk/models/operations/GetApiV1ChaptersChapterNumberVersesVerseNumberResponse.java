package openapisdk.models.operations;



public class GetApiV1ChaptersChapterNumberVersesVerseNumberResponse {
    public String contentType;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VerseSchema verseSchema;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberResponse withVerseSchema(openapisdk.models.shared.VerseSchema verseSchema) {
        this.verseSchema = verseSchema;
        return this;
    }
}