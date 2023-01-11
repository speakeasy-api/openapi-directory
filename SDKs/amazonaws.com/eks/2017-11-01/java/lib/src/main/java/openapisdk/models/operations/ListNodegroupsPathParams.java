package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListNodegroupsPathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=name")
    public String name;
    public ListNodegroupsPathParams withName(String name) {
        this.name = name;
        return this;
    }
}