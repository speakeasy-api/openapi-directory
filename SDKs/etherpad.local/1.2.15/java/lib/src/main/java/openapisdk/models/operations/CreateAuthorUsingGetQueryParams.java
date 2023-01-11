package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateAuthorUsingGetQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}