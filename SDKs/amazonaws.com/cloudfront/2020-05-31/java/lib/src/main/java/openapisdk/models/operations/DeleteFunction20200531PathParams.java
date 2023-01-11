package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteFunction20200531PathParams {
    @SpeakeasyMetadata("pathParam:style=simple,explode=false,name=Name")
    public String name;
    public DeleteFunction20200531PathParams withName(String name) {
        this.name = name;
        return this;
    }
}