package openapisdk.models.operations;



public class FindEligibleItemsResponse {
    public String contentType;
    public FindEligibleItemsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PagedEligibleItemCollection pagedEligibleItemCollection;
    public FindEligibleItemsResponse withPagedEligibleItemCollection(openapisdk.models.shared.PagedEligibleItemCollection pagedEligibleItemCollection) {
        this.pagedEligibleItemCollection = pagedEligibleItemCollection;
        return this;
    }
    public Long statusCode;
    public FindEligibleItemsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}