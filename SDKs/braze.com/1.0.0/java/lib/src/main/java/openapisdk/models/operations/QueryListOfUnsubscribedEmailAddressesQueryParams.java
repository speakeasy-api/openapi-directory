package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class QueryListOfUnsubscribedEmailAddressesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=email")
    public String email;
    public QueryListOfUnsubscribedEmailAddressesQueryParams withEmail(String email) {
        this.email = email;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=end_date")
    public String endDate;
    public QueryListOfUnsubscribedEmailAddressesQueryParams withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=limit")
    public String limit;
    public QueryListOfUnsubscribedEmailAddressesQueryParams withLimit(String limit) {
        this.limit = limit;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=offset")
    public String offset;
    public QueryListOfUnsubscribedEmailAddressesQueryParams withOffset(String offset) {
        this.offset = offset;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=sort_direction")
    public String sortDirection;
    public QueryListOfUnsubscribedEmailAddressesQueryParams withSortDirection(String sortDirection) {
        this.sortDirection = sortDirection;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=start_date")
    public String startDate;
    public QueryListOfUnsubscribedEmailAddressesQueryParams withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}