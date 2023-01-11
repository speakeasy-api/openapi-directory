package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SeeContentBlockInformationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=content_block_id")
    public String contentBlockId;
    public SeeContentBlockInformationQueryParams withContentBlockId(String contentBlockId) {
        this.contentBlockId = contentBlockId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_inclusion_data")
    public String includeInclusionData;
    public SeeContentBlockInformationQueryParams withIncludeInclusionData(String includeInclusionData) {
        this.includeInclusionData = includeInclusionData;
        return this;
    }
}