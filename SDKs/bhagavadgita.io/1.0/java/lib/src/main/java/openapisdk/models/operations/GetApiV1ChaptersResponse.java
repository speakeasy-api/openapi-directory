package openapisdk.models.operations;



public class GetApiV1ChaptersResponse {
    public openapisdk.models.shared.ChapterSchema chapterSchema;
    public GetApiV1ChaptersResponse withChapterSchema(openapisdk.models.shared.ChapterSchema chapterSchema) {
        this.chapterSchema = chapterSchema;
        return this;
    }
    public String contentType;
    public GetApiV1ChaptersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public GetApiV1ChaptersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}