package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCarHistoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=api_key")
    public String apiKey;
    public GetCarHistoryQueryParams withApiKey(String apiKey) {
        this.apiKey = apiKey;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=fields")
    public String fields;
    public GetCarHistoryQueryParams withFields(String fields) {
        this.fields = fields;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_duplicates")
    public Boolean includeDuplicates;
    public GetCarHistoryQueryParams withIncludeDuplicates(Boolean includeDuplicates) {
        this.includeDuplicates = includeDuplicates;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page")
    public Double page;
    public GetCarHistoryQueryParams withPage(Double page) {
        this.page = page;
        return this;
    }
}