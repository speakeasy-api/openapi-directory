package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

public class DealershipDataPaginated {
    @JsonProperty("dealers")
    public DealershipData[] dealers;
    public DealershipDataPaginated withDealers(DealershipData[] dealers) {
        this.dealers = dealers;
        return this;
    }
    @JsonProperty("maxPages")
    public Long maxPages;
    public DealershipDataPaginated withMaxPages(Long maxPages) {
        this.maxPages = maxPages;
        return this;
    }
    @JsonProperty("page")
    public Long page;
    public DealershipDataPaginated withPage(Long page) {
        this.page = page;
        return this;
    }
}