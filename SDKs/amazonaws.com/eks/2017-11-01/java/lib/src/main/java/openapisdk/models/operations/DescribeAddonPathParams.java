package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAddonPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=addonName")
    public String addonName;
    public DescribeAddonPathParams withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DescribeAddonPathParams withName(String name) {
        this.name = name;
        return this;
    }
}