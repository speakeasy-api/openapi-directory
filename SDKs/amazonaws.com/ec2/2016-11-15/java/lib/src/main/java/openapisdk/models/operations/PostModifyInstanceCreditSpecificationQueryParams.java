package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyInstanceCreditSpecificationQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyInstanceCreditSpecificationActionEnum action;
    public PostModifyInstanceCreditSpecificationQueryParams withAction(PostModifyInstanceCreditSpecificationActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyInstanceCreditSpecificationVersionEnum version;
    public PostModifyInstanceCreditSpecificationQueryParams withVersion(PostModifyInstanceCreditSpecificationVersionEnum version) {
        this.version = version;
        return this;
    }
}