package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class AuditCaseSubCategory {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_category_id")
    public String subCategoryId;
    public AuditCaseSubCategory withSubCategoryId(String subCategoryId) {
        this.subCategoryId = subCategoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sub_category_name")
    public String subCategoryName;
    public AuditCaseSubCategory withSubCategoryName(String subCategoryName) {
        this.subCategoryName = subCategoryName;
        return this;
    }
}