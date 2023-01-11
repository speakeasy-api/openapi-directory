package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=chapter_number")
    public Long chapterNumber;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams withChapterNumber(Long chapterNumber) {
        this.chapterNumber = chapterNumber;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=verse_number")
    public GetApiV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum verseNumber;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberPathParams withVerseNumber(GetApiV1ChaptersChapterNumberVersesVerseNumberVerseNumberEnum verseNumber) {
        this.verseNumber = verseNumber;
        return this;
    }
}