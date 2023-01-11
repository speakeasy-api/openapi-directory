package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DraftPosition {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("abbreviation")
    public String abbreviation;
    public DraftPosition withAbbreviation(String abbreviation) {
        this.abbreviation = abbreviation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public DraftPosition withName(String name) {
        this.name = name;
        return this;
    }
}