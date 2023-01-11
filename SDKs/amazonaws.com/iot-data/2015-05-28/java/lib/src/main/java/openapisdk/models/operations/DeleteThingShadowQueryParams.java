package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteThingShadowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public DeleteThingShadowQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}