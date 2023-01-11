package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBuildSuggestersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetBuildSuggestersActionEnum action;
    public GetBuildSuggestersQueryParams withAction(GetBuildSuggestersActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetBuildSuggestersQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetBuildSuggestersVersionEnum version;
    public GetBuildSuggestersQueryParams withVersion(GetBuildSuggestersVersionEnum version) {
        this.version = version;
        return this;
    }
}