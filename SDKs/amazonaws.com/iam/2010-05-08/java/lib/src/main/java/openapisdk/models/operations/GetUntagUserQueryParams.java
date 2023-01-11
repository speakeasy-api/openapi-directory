package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetUntagUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetUntagUserActionEnum action;
    public GetUntagUserQueryParams withAction(GetUntagUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=TagKeys")
    public String[] tagKeys;
    public GetUntagUserQueryParams withTagKeys(String[] tagKeys) {
        this.tagKeys = tagKeys;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=UserName")
    public String userName;
    public GetUntagUserQueryParams withUserName(String userName) {
        this.userName = userName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetUntagUserVersionEnum version;
    public GetUntagUserQueryParams withVersion(GetUntagUserVersionEnum version) {
        this.version = version;
        return this;
    }
}