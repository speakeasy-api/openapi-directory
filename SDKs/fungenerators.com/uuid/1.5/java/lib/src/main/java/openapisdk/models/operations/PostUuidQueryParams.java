package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUuidQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=uuidstr")
    public String uuidstr;
    public PostUuidQueryParams withUuidstr(String uuidstr) {
        this.uuidstr = uuidstr;
        return this;
    }
}