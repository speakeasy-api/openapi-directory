package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetReadmeFromAltPathQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public ReposGetReadmeFromAltPathQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
}