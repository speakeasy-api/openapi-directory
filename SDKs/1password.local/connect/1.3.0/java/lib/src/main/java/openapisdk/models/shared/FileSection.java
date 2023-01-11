package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FileSection
 * For files that are in a section, this field describes the section.
**/
public class FileSection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public FileSection withId(String id) {
        this.id = id;
        return this;
    }
}