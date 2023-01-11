package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class District {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public District withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("mdr_number")
    public String mdrNumber;
    public District withMdrNumber(String mdrNumber) {
        this.mdrNumber = mdrNumber;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public District withName(String name) {
        this.name = name;
        return this;
    }
}