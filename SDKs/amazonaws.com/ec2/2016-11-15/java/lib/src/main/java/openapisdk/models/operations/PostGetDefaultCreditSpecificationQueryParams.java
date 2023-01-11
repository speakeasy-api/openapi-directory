package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetDefaultCreditSpecificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetDefaultCreditSpecificationActionEnum action;
    public PostGetDefaultCreditSpecificationQueryParams withAction(PostGetDefaultCreditSpecificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetDefaultCreditSpecificationVersionEnum version;
    public PostGetDefaultCreditSpecificationQueryParams withVersion(PostGetDefaultCreditSpecificationVersionEnum version) {
        this.version = version;
        return this;
    }
}