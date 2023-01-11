package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostNodeRwQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=addMembers")
    public String addMembers;
    public PostNodeRwQueryParams withAddMembers(String addMembers) {
        this.addMembers = addMembers;
        return this;
    }
}