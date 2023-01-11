package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public GetApiV1ChaptersChapterNumberVersesVerseNumberLanguageEnum language;
    public GetApiV1ChaptersChapterNumberVersesVerseNumberQueryParams withLanguage(GetApiV1ChaptersChapterNumberVersesVerseNumberLanguageEnum language) {
        this.language = language;
        return this;
    }
}