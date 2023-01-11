package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetReadmeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public ReposGetReadmeQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
}