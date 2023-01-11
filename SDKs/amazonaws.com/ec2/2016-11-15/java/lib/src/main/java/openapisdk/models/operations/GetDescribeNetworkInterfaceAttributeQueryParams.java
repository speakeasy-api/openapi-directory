package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeNetworkInterfaceAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeNetworkInterfaceAttributeActionEnum action;
    public GetDescribeNetworkInterfaceAttributeQueryParams withAction(GetDescribeNetworkInterfaceAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Attribute")
    public GetDescribeNetworkInterfaceAttributeAttributeEnum attribute;
    public GetDescribeNetworkInterfaceAttributeQueryParams withAttribute(GetDescribeNetworkInterfaceAttributeAttributeEnum attribute) {
        this.attribute = attribute;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DryRun")
    public Boolean dryRun;
    public GetDescribeNetworkInterfaceAttributeQueryParams withDryRun(Boolean dryRun) {
        this.dryRun = dryRun;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=NetworkInterfaceId")
    public String networkInterfaceId;
    public GetDescribeNetworkInterfaceAttributeQueryParams withNetworkInterfaceId(String networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeNetworkInterfaceAttributeVersionEnum version;
    public GetDescribeNetworkInterfaceAttributeQueryParams withVersion(GetDescribeNetworkInterfaceAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}