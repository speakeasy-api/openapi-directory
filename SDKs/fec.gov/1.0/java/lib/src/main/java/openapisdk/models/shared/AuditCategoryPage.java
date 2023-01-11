package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditCategoryPage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("pagination")
    public OffsetInfo pagination;
    public AuditCategoryPage withPagination(OffsetInfo pagination) {
        this.pagination = pagination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("results")
    public AuditCategory[] results;
    public AuditCategoryPage withResults(AuditCategory[] results) {
        this.results = results;
        return this;
    }
}