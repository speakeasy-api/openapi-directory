package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareShareRelationshipsShareRelationshipsMessageShareMessageData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ShareShareRelationshipsShareRelationshipsMessageShareMessageData withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum type;
    public ShareShareRelationshipsShareRelationshipsMessageShareMessageData withType(ShareShareRelationshipsShareRelationshipsMessageShareMessageDataTypeEnum type) {
        this.type = type;
        return this;
    }
}