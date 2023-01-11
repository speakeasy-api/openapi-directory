package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateThingShadowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public UpdateThingShadowQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}