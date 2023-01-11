package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupIfNotExistsForUsingGetQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupMapper")
    public String groupMapper;
    public CreateGroupIfNotExistsForUsingGetQueryParams withGroupMapper(String groupMapper) {
        this.groupMapper = groupMapper;
        return this;
    }
}