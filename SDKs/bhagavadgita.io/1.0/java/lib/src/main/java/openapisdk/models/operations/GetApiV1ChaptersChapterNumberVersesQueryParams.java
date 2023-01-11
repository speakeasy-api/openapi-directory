package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1ChaptersChapterNumberVersesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public GetApiV1ChaptersChapterNumberVersesQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public GetApiV1ChaptersChapterNumberVersesLanguageEnum language;
    public GetApiV1ChaptersChapterNumberVersesQueryParams withLanguage(GetApiV1ChaptersChapterNumberVersesLanguageEnum language) {
        this.language = language;
        return this;
    }
}