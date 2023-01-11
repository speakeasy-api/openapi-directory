package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersNameOrIdRenameQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostContainersNameOrIdRenameQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}