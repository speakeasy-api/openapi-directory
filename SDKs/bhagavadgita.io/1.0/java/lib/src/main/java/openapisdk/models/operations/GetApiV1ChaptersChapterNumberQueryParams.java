package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1ChaptersChapterNumberQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public GetApiV1ChaptersChapterNumberQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public GetApiV1ChaptersChapterNumberLanguageEnum language;
    public GetApiV1ChaptersChapterNumberQueryParams withLanguage(GetApiV1ChaptersChapterNumberLanguageEnum language) {
        this.language = language;
        return this;
    }
}