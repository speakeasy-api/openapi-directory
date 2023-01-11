package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Target
 * The target parameter specifies the identifier to which the home region is applied, which is always an <code>ACCOUNT</code>. It applies the home region to the current <code>ACCOUNT</code>.
**/
public class Target {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Id")
    public String id;
    public Target withId(String id) {
        this.id = id;
        return this;
    }
    @JsonProperty("Type")
    public TargetTypeEnum type;
    public Target withType(TargetTypeEnum type) {
        this.type = type;
        return this;
    }
}