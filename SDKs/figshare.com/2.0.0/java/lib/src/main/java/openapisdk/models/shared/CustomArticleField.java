package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CustomArticleField {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("is_mandatory")
    public Boolean isMandatory;
    public CustomArticleField withIsMandatory(Boolean isMandatory) {
        this.isMandatory = isMandatory;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public CustomArticleField withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("value")
    public String value;
    public CustomArticleField withValue(String value) {
        this.value = value;
        return this;
    }
}