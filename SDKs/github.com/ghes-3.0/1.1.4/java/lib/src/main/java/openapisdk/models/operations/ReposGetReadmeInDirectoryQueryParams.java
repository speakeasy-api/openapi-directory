package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ReposGetReadmeInDirectoryQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ref")
    public String ref;
    public ReposGetReadmeInDirectoryQueryParams withRef(String ref) {
        this.ref = ref;
        return this;
    }
}