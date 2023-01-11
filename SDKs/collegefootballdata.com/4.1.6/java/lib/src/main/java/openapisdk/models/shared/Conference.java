package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Conference {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbreviation")
    public String abbreviation;
    public Conference withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public Conference withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Conference withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("short_name")
    public String shortName;
    public Conference withShortName(String shortName) {
        this.shortName = shortName;
        return this;
    }
}