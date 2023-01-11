package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInterfaceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeNetworkInterfaceAttributeActionEnum action;
    public PostDescribeNetworkInterfaceAttributeQueryParams withAction(PostDescribeNetworkInterfaceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeNetworkInterfaceAttributeVersionEnum version;
    public PostDescribeNetworkInterfaceAttributeQueryParams withVersion(PostDescribeNetworkInterfaceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}