package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ShareShareRelationshipsShareRelationshipsMessage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public ShareShareRelationshipsShareRelationshipsMessageShareMessageData data;
    public ShareShareRelationshipsShareRelationshipsMessage withData(ShareShareRelationshipsShareRelationshipsMessageShareMessageData data) {
        this.data = data;
        return this;
    }
}