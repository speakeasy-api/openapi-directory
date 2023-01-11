package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20161125QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WithTags")
    public Boolean withTags;
    public CreateStreamingDistributionWithTags20161125QueryParams withWithTags(Boolean withTags) {
        this.withTags = withTags;
        return this;
    }
}