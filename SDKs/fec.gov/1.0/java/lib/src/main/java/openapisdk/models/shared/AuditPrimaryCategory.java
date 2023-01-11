package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditPrimaryCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_category_id")
    public String primaryCategoryId;
    public AuditPrimaryCategory withPrimaryCategoryId(String primaryCategoryId) {
        this.primaryCategoryId = primaryCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_category_name")
    public String primaryCategoryName;
    public AuditPrimaryCategory withPrimaryCategoryName(String primaryCategoryName) {
        this.primaryCategoryName = primaryCategoryName;
        return this;
    }
}