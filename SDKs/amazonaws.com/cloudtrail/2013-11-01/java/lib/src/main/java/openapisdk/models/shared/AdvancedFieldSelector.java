package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AdvancedFieldSelector
 * A single selector statement in an advanced event selector.
**/
public class AdvancedFieldSelector {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EndsWith")
    public String[] endsWith;
    public AdvancedFieldSelector withEndsWith(String[] endsWith) {
        this.endsWith = endsWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Equals")
    public String[] equals;
    public AdvancedFieldSelector withEquals(String[] equals) {
        this.equals = equals;
        return this;
    }
    @JsonProperty("Field")
    public String field;
    public AdvancedFieldSelector withField(String field) {
        this.field = field;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotEndsWith")
    public String[] notEndsWith;
    public AdvancedFieldSelector withNotEndsWith(String[] notEndsWith) {
        this.notEndsWith = notEndsWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotEquals")
    public String[] notEquals;
    public AdvancedFieldSelector withNotEquals(String[] notEquals) {
        this.notEquals = notEquals;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NotStartsWith")
    public String[] notStartsWith;
    public AdvancedFieldSelector withNotStartsWith(String[] notStartsWith) {
        this.notStartsWith = notStartsWith;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StartsWith")
    public String[] startsWith;
    public AdvancedFieldSelector withStartsWith(String[] startsWith) {
        this.startsWith = startsWith;
        return this;
    }
}