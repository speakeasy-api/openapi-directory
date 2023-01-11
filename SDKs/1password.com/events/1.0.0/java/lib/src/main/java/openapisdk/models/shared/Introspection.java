package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class Introspection {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Features")
    public String[] features;
    public Introspection withFeatures(String[] features) {
        this.features = features;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("IssuedAt")
    public OffsetDateTime issuedAt;
    public Introspection withIssuedAt(OffsetDateTime issuedAt) {
        this.issuedAt = issuedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UUID")
    public String uuid;
    public Introspection withUuid(String uuid) {
        this.uuid = uuid;
        return this;
    }
}