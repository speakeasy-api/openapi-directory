package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeNodegroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DescribeNodegroupPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodegroupName")
    public String nodegroupName;
    public DescribeNodegroupPathParams withNodegroupName(String nodegroupName) {
        this.nodegroupName = nodegroupName;
        return this;
    }
}