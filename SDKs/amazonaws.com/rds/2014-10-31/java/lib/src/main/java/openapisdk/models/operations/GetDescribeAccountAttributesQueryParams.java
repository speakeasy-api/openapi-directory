package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAccountAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAccountAttributesActionEnum action;
    public GetDescribeAccountAttributesQueryParams withAction(GetDescribeAccountAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAccountAttributesVersionEnum version;
    public GetDescribeAccountAttributesQueryParams withVersion(GetDescribeAccountAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}