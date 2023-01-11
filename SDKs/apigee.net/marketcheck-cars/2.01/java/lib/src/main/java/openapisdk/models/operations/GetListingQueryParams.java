package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=append_api_key")
    public Boolean appendApiKey;
    public GetListingQueryParams withAppendApiKey(Boolean appendApiKey) {
        this.appendApiKey = appendApiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relevant_links")
    public Boolean includeRelevantLinks;
    public GetListingQueryParams withIncludeRelevantLinks(Boolean includeRelevantLinks) {
        this.includeRelevantLinks = includeRelevantLinks;
        return this;
    }
}