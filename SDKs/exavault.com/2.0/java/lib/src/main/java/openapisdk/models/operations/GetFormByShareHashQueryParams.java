package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetFormByShareHashQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include")
    public GetFormByShareHashIncludeEnum include;
    public GetFormByShareHashQueryParams withInclude(GetFormByShareHashIncludeEnum include) {
        this.include = include;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=shareHash")
    public String shareHash;
    public GetFormByShareHashQueryParams withShareHash(String shareHash) {
        this.shareHash = shareHash;
        return this;
    }
}