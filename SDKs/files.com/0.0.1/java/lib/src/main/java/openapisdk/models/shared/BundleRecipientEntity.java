package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * BundleRecipientEntity
 * List Bundle Recipients
**/
public class BundleRecipientEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("company")
    public String company;
    public BundleRecipientEntity withCompany(String company) {
        this.company = company;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public BundleRecipientEntity withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("note")
    public String note;
    public BundleRecipientEntity withNote(String note) {
        this.note = note;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recipient")
    public String recipient;
    public BundleRecipientEntity withRecipient(String recipient) {
        this.recipient = recipient;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("sent_at")
    public OffsetDateTime sentAt;
    public BundleRecipientEntity withSentAt(OffsetDateTime sentAt) {
        this.sentAt = sentAt;
        return this;
    }
}