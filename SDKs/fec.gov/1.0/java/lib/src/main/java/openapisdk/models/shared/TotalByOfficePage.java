package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class TotalByOfficePage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public OffsetInfo pagination;
    public TotalByOfficePage withPagination(OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public TotalByOffice[] results;
    public TotalByOfficePage withResults(TotalByOffice[] results) {
        this.results = results;
        return this;
    }
}