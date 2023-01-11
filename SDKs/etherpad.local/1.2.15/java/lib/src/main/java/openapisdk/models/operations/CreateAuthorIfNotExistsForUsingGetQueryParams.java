package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAuthorIfNotExistsForUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=authorMapper")
    public String authorMapper;
    public CreateAuthorIfNotExistsForUsingGetQueryParams withAuthorMapper(String authorMapper) {
        this.authorMapper = authorMapper;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public CreateAuthorIfNotExistsForUsingGetQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}