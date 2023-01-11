package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * SessionActivityEntry
 * Single entry of session activity
**/
public class SessionActivityEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("attributes")
    public SessionActivityEntryAttributes attributes;
    public SessionActivityEntry withAttributes(SessionActivityEntryAttributes attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public SessionActivityEntry withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public SessionActivityEntryTypeEnum type;
    public SessionActivityEntry withType(SessionActivityEntryTypeEnum type) {
        this.type = type;
        return this;
    }
}