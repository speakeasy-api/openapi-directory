package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateAuthorUsingPostQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}