package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class EnterpriseOverviewPages {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("total_pages")
    public Long totalPages;
    public EnterpriseOverviewPages withTotalPages(Long totalPages) {
        this.totalPages = totalPages;
        return this;
    }
}