package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSynonymOptionsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSynonymOptionsActionEnum action;
    public PostDescribeSynonymOptionsQueryParams withAction(PostDescribeSynonymOptionsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSynonymOptionsVersionEnum version;
    public PostDescribeSynonymOptionsQueryParams withVersion(PostDescribeSynonymOptionsVersionEnum version) {
        this.version = version;
        return this;
    }
}