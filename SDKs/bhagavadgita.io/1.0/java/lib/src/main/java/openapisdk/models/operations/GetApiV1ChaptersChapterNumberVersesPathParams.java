package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1ChaptersChapterNumberVersesPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chapter_number")
    public Long chapterNumber;
    public GetApiV1ChaptersChapterNumberVersesPathParams withChapterNumber(Long chapterNumber) {
        this.chapterNumber = chapterNumber;
        return this;
    }
}