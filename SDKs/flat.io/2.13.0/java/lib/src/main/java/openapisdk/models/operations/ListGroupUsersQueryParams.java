package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListGroupUsersQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=source")
    public ListGroupUsersSourceEnum source;
    public ListGroupUsersQueryParams withSource(ListGroupUsersSourceEnum source) {
        this.source = source;
        return this;
    }
}