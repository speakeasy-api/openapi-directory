package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class InsurancesListQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=cursor")
    public String cursor;
    public InsurancesListQueryParams withCursor(String cursor) {
        this.cursor = cursor;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=page_size")
    public Long pageSize;
    public InsurancesListQueryParams withPageSize(Long pageSize) {
        this.pageSize = pageSize;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=payer_type")
    public String payerType;
    public InsurancesListQueryParams withPayerType(String payerType) {
        this.payerType = payerType;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=term")
    public String term;
    public InsurancesListQueryParams withTerm(String term) {
        this.term = term;
        return this;
    }
}