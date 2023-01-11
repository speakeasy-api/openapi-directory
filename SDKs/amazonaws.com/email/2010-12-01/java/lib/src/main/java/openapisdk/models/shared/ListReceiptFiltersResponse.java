package openapisdk.models.shared;



/**
 * ListReceiptFiltersResponse
 * A list of IP address filters that exist under your AWS account.
**/
public class ListReceiptFiltersResponse {
    public ReceiptFilter[] filters;
    public ListReceiptFiltersResponse withFilters(ReceiptFilter[] filters) {
        this.filters = filters;
        return this;
    }
}