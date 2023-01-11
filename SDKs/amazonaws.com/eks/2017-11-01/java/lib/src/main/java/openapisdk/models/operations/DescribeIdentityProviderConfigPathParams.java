package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeIdentityProviderConfigPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DescribeIdentityProviderConfigPathParams withName(String name) {
        this.name = name;
        return this;
    }
}