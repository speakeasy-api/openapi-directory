package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetApiV1VersesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=access_token")
    public String accessToken;
    public GetApiV1VersesQueryParams withAccessToken(String accessToken) {
        this.accessToken = accessToken;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=language")
    public GetApiV1VersesLanguageEnum language;
    public GetApiV1VersesQueryParams withLanguage(GetApiV1VersesLanguageEnum language) {
        this.language = language;
        return this;
    }
}