package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AccountAttribute
 * Stores account attributes. 
**/
public class AccountAttribute {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Maximum")
    public Long maximum;
    public AccountAttribute withMaximum(Long maximum) {
        this.maximum = maximum;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public AccountAttribute withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Used")
    public Long used;
    public AccountAttribute withUsed(Long used) {
        this.used = used;
        return this;
    }
}