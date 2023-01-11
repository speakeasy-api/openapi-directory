package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUpdateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addonName")
    public String addonName;
    public DescribeUpdateQueryParams withAddonName(String addonName) {
        this.addonName = addonName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=nodegroupName")
    public String nodegroupName;
    public DescribeUpdateQueryParams withNodegroupName(String nodegroupName) {
        this.nodegroupName = nodegroupName;
        return this;
    }
}