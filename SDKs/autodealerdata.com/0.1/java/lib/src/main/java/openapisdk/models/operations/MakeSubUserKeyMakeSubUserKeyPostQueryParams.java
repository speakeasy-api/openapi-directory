package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class MakeSubUserKeyMakeSubUserKeyPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiID")
    public String apiID;
    public MakeSubUserKeyMakeSubUserKeyPostQueryParams withApiId(String apiID) {
        this.apiID = apiID;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=apiKey")
    public String apiKey;
    public MakeSubUserKeyMakeSubUserKeyPostQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=siteName")
    public String siteName;
    public MakeSubUserKeyMakeSubUserKeyPostQueryParams withSiteName(String siteName) {
        this.siteName = siteName;
        return this;
    }
}