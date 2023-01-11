package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListingCarFsboIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetListingCarFsboIdQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=append_api_key")
    public Boolean appendApiKey;
    public GetListingCarFsboIdQueryParams withAppendApiKey(Boolean appendApiKey) {
        this.appendApiKey = appendApiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_relevant_links")
    public Boolean includeRelevantLinks;
    public GetListingCarFsboIdQueryParams withIncludeRelevantLinks(Boolean includeRelevantLinks) {
        this.includeRelevantLinks = includeRelevantLinks;
        return this;
    }
}