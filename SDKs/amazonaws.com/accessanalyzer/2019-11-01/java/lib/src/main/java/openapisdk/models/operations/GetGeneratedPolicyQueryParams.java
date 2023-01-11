package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetGeneratedPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeResourcePlaceholders")
    public Boolean includeResourcePlaceholders;
    public GetGeneratedPolicyQueryParams withIncludeResourcePlaceholders(Boolean includeResourcePlaceholders) {
        this.includeResourcePlaceholders = includeResourcePlaceholders;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=includeServiceLevelTemplate")
    public Boolean includeServiceLevelTemplate;
    public GetGeneratedPolicyQueryParams withIncludeServiceLevelTemplate(Boolean includeServiceLevelTemplate) {
        this.includeServiceLevelTemplate = includeServiceLevelTemplate;
        return this;
    }
}