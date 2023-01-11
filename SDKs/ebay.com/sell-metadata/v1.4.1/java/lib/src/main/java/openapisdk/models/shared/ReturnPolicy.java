package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ReturnPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryId")
    public String categoryId;
    public ReturnPolicy withCategoryId(String categoryId) {
        this.categoryId = categoryId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("categoryTreeId")
    public String categoryTreeId;
    public ReturnPolicy withCategoryTreeId(String categoryTreeId) {
        this.categoryTreeId = categoryTreeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domestic")
    public ReturnPolicyDetails domestic;
    public ReturnPolicy withDomestic(ReturnPolicyDetails domestic) {
        this.domestic = domestic;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("international")
    public ReturnPolicyDetails international;
    public ReturnPolicy withInternational(ReturnPolicyDetails international) {
        this.international = international;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("required")
    public Boolean required;
    public ReturnPolicy withRequired(Boolean required) {
        this.required = required;
        return this;
    }
}