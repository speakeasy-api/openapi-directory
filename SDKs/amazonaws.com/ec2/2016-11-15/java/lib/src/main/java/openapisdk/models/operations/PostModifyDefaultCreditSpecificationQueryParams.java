package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyDefaultCreditSpecificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyDefaultCreditSpecificationActionEnum action;
    public PostModifyDefaultCreditSpecificationQueryParams withAction(PostModifyDefaultCreditSpecificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyDefaultCreditSpecificationVersionEnum version;
    public PostModifyDefaultCreditSpecificationQueryParams withVersion(PostModifyDefaultCreditSpecificationVersionEnum version) {
        this.version = version;
        return this;
    }
}