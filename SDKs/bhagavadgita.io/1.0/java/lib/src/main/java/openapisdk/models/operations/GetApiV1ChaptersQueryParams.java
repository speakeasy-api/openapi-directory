package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1ChaptersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public GetApiV1ChaptersQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public GetApiV1ChaptersLanguageEnum language;
    public GetApiV1ChaptersQueryParams withLanguage(GetApiV1ChaptersLanguageEnum language) {
        this.language = language;
        return this;
    }
}