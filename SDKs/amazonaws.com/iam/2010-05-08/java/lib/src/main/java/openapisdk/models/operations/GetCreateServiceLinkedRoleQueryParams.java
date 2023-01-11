package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateServiceLinkedRoleQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AWSServiceName")
    public String awsServiceName;
    public GetCreateServiceLinkedRoleQueryParams withAwsServiceName(String awsServiceName) {
        this.awsServiceName = awsServiceName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateServiceLinkedRoleActionEnum action;
    public GetCreateServiceLinkedRoleQueryParams withAction(GetCreateServiceLinkedRoleActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CustomSuffix")
    public String customSuffix;
    public GetCreateServiceLinkedRoleQueryParams withCustomSuffix(String customSuffix) {
        this.customSuffix = customSuffix;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Description")
    public String description;
    public GetCreateServiceLinkedRoleQueryParams withDescription(String description) {
        this.description = description;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateServiceLinkedRoleVersionEnum version;
    public GetCreateServiceLinkedRoleQueryParams withVersion(GetCreateServiceLinkedRoleVersionEnum version) {
        this.version = version;
        return this;
    }
}