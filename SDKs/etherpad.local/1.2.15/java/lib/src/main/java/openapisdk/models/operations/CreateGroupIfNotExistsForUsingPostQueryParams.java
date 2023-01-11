package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGroupIfNotExistsForUsingPostQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=groupMapper")
    public String groupMapper;
    public CreateGroupIfNotExistsForUsingPostQueryParams withGroupMapper(String groupMapper) {
        this.groupMapper = groupMapper;
        return this;
    }
}