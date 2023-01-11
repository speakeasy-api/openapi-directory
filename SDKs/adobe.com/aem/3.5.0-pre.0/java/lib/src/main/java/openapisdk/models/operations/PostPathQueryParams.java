package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=:name")
    public String name;
    public PostPathQueryParams withName(String name) {
        this.name = name;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=jcr:primaryType")
    public String jcrPrimaryType;
    public PostPathQueryParams withJcrPrimaryType(String jcrPrimaryType) {
        this.jcrPrimaryType = jcrPrimaryType;
        return this;
    }
}