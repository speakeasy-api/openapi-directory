package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteNodegroupPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public DeleteNodegroupPathParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=nodegroupName")
    public String nodegroupName;
    public DeleteNodegroupPathParams withNodegroupName(String nodegroupName) {
        this.nodegroupName = nodegroupName;
        return this;
    }
}