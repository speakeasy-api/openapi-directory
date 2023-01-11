package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetThingShadowQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public GetThingShadowQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}