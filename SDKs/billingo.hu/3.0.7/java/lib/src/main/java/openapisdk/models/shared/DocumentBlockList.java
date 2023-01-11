package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * DocumentBlockList
 * A object with a data property that contains an array of up to limit document blocks. Each entry in the array is a separate document block object. If no more document block are available, the resulting array will be empty.
**/
public class DocumentBlockList {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("current_page")
    public Long currentPage;
    public DocumentBlockList withCurrentPage(Long currentPage) {
        this.currentPage = currentPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public DocumentBlock[] data;
    public DocumentBlockList withData(DocumentBlock[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("last_page")
    public Long lastPage;
    public DocumentBlockList withLastPage(Long lastPage) {
        this.lastPage = lastPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next_page_url")
    public String nextPageUrl;
    public DocumentBlockList withNextPageUrl(String nextPageUrl) {
        this.nextPageUrl = nextPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("per_page")
    public Long perPage;
    public DocumentBlockList withPerPage(Long perPage) {
        this.perPage = perPage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("prev_page_url")
    public String prevPageUrl;
    public DocumentBlockList withPrevPageUrl(String prevPageUrl) {
        this.prevPageUrl = prevPageUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total")
    public Long total;
    public DocumentBlockList withTotal(Long total) {
        this.total = total;
        return this;
    }
}