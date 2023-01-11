package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SharedLinkTarget {
    @JsonProperty("id")
    public String id;
    public SharedLinkTarget withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public SharedLinkTarget withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public FileTypeEnum type;
    public SharedLinkTarget withType(FileTypeEnum type) {
        this.type = type;
        return this;
    }
}