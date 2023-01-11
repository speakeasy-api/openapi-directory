package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDriverQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_group")
    public Boolean includeGroup;
    public GetDriverQueryParams withIncludeGroup(Boolean includeGroup) {
        this.includeGroup = includeGroup;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_organization")
    public Boolean includeOrganization;
    public GetDriverQueryParams withIncludeOrganization(Boolean includeOrganization) {
        this.includeOrganization = includeOrganization;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=include_tokens")
    public Boolean includeTokens;
    public GetDriverQueryParams withIncludeTokens(Boolean includeTokens) {
        this.includeTokens = includeTokens;
        return this;
    }
}