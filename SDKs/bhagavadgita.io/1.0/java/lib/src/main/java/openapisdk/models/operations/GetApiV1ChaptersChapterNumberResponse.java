package openapisdk.models.operations;



public class GetApiV1ChaptersChapterNumberResponse {
    public openapisdk.models.shared.ChapterSchema chapterSchema;
    public GetApiV1ChaptersChapterNumberResponse withChapterSchema(openapisdk.models.shared.ChapterSchema chapterSchema) {
        this.chapterSchema = chapterSchema;
        return this;
    }
    public String contentType;
    public GetApiV1ChaptersChapterNumberResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV1ChaptersChapterNumberResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}