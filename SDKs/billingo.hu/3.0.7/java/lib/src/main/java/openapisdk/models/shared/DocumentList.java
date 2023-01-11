package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentList
 * A object with a data property that contains an array of up to limit documents. Each entry in the array is a separate document object. If no more documents are available, the resulting array will be empty.
**/
public class DocumentList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_page")
    public Long currentPage;
    public DocumentList withCurrentPage(Long currentPage) {
        this.currentPage = currentPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public Document[] data;
    public DocumentList withData(Document[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_page")
    public Long lastPage;
    public DocumentList withLastPage(Long lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_url")
    public String nextPageUrl;
    public DocumentList withNextPageUrl(String nextPageUrl) {
        this.nextPageUrl = nextPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public DocumentList withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev_page_url")
    public String prevPageUrl;
    public DocumentList withPrevPageUrl(String prevPageUrl) {
        this.prevPageUrl = prevPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public DocumentList withTotal(Long total) {
        this.total = total;
        return this;
    }
}