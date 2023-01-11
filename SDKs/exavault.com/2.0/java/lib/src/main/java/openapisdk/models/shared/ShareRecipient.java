package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ShareRecipient {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public ShareRecipient withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("email")
    public String email;
    public ShareRecipient withEmail(String email) {
        this.email = email;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("hash")
    public String hash;
    public ShareRecipient withHash(String hash) {
        this.hash = hash;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public ShareRecipient withId(Integer id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("received")
    public Boolean received;
    public ShareRecipient withReceived(Boolean received) {
        this.received = received;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("sent")
    public Boolean sent;
    public ShareRecipient withSent(Boolean sent) {
        this.sent = sent;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("shareId")
    public String shareId;
    public ShareRecipient withShareId(String shareId) {
        this.shareId = shareId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("type")
    public ShareRecipientTypeEnum type;
    public ShareRecipient withType(ShareRecipientTypeEnum type) {
        this.type = type;
        return this;
    }
}