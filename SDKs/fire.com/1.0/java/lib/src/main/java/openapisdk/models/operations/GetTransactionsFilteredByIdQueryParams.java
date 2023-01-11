package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTransactionsFilteredByIdQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateRangeFrom")
    public Double dateRangeFrom;
    public GetTransactionsFilteredByIdQueryParams withDateRangeFrom(Double dateRangeFrom) {
        this.dateRangeFrom = dateRangeFrom;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=dateRangeTo")
    public Double dateRangeTo;
    public GetTransactionsFilteredByIdQueryParams withDateRangeTo(Double dateRangeTo) {
        this.dateRangeTo = dateRangeTo;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=searchKeyword")
    public String searchKeyword;
    public GetTransactionsFilteredByIdQueryParams withSearchKeyword(String searchKeyword) {
        this.searchKeyword = searchKeyword;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=transactionTypes")
    public String[] transactionTypes;
    public GetTransactionsFilteredByIdQueryParams withTransactionTypes(String[] transactionTypes) {
        this.transactionTypes = transactionTypes;
        return this;
    }
}