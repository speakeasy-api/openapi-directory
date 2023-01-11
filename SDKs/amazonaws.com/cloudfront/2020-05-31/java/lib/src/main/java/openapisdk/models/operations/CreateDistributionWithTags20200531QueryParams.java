package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateDistributionWithTags20200531QueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=WithTags")
    public Boolean withTags;
    public CreateDistributionWithTags20200531QueryParams withWithTags(Boolean withTags) {
        this.withTags = withTags;
        return this;
    }
}