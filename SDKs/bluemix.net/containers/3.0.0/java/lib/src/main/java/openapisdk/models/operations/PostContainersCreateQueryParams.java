package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostContainersCreateQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=name")
    public String name;
    public PostContainersCreateQueryParams withName(String name) {
        this.name = name;
        return this;
    }
}