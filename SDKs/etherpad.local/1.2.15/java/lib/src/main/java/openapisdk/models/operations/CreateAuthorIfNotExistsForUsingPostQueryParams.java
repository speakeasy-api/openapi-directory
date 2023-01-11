package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorIfNotExistsForUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorMapper")
    public String authorMapper;
    public CreateAuthorIfNotExistsForUsingPostQueryParams withAuthorMapper(String authorMapper) {
        this.authorMapper = authorMapper;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateAuthorIfNotExistsForUsingPostQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}