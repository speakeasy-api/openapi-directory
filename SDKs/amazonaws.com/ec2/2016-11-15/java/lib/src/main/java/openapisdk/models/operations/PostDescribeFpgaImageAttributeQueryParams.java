package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeFpgaImageAttributeQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeFpgaImageAttributeActionEnum action;
    public PostDescribeFpgaImageAttributeQueryParams withAction(PostDescribeFpgaImageAttributeActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeFpgaImageAttributeVersionEnum version;
    public PostDescribeFpgaImageAttributeQueryParams withVersion(PostDescribeFpgaImageAttributeVersionEnum version) {
        this.version = version;
        return this;
    }
}