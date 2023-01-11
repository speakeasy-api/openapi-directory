package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class SignRequestQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=test")
    public Long test;
    public SignRequestQueryParams withTest(Long test) {
        this.test = test;
        return this;
    }
}