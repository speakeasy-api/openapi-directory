package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareShareRelationshipsShareRelationshipsOwnerData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ShareShareRelationshipsShareRelationshipsOwnerData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public String type;
    public ShareShareRelationshipsShareRelationshipsOwnerData withType(String type) {
        this.type = type;
        return this;
    }
}