package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagSamlProviderQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagSamlProviderActionEnum action;
    public GetUntagSamlProviderQueryParams withAction(GetUntagSamlProviderActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=SAMLProviderArn")
    public String samlProviderArn;
    public GetUntagSamlProviderQueryParams withSamlProviderArn(String samlProviderArn) {
        this.samlProviderArn = samlProviderArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagSamlProviderQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagSamlProviderVersionEnum version;
    public GetUntagSamlProviderQueryParams withVersion(GetUntagSamlProviderVersionEnum version) {
        this.version = version;
        return this;
    }
}