package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUpdateServiceAccessPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AccessPolicies")
    public String accessPolicies;
    public GetUpdateServiceAccessPoliciesQueryParams withAccessPolicies(String accessPolicies) {
        this.accessPolicies = accessPolicies;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUpdateServiceAccessPoliciesActionEnum action;
    public GetUpdateServiceAccessPoliciesQueryParams withAction(GetUpdateServiceAccessPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetUpdateServiceAccessPoliciesQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUpdateServiceAccessPoliciesVersionEnum version;
    public GetUpdateServiceAccessPoliciesQueryParams withVersion(GetUpdateServiceAccessPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}