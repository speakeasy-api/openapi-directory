package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStreamingDistributionWithTags20190326QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WithTags")
    public Boolean withTags;
    public CreateStreamingDistributionWithTags20190326QueryParams withWithTags(Boolean withTags) {
        this.withTags = withTags;
        return this;
    }
}