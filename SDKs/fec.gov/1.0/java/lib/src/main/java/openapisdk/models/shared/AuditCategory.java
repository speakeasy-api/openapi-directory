package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_category_id")
    public String primaryCategoryId;
    public AuditCategory withPrimaryCategoryId(String primaryCategoryId) {
        this.primaryCategoryId = primaryCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("primary_category_name")
    public String primaryCategoryName;
    public AuditCategory withPrimaryCategoryName(String primaryCategoryName) {
        this.primaryCategoryName = primaryCategoryName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_category_list")
    public AuditCategoryRelation[] subCategoryList;
    public AuditCategory withSubCategoryList(AuditCategoryRelation[] subCategoryList) {
        this.subCategoryList = subCategoryList;
        return this;
    }
}