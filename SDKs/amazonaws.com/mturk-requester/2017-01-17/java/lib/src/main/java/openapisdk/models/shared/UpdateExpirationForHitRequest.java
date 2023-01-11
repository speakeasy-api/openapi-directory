package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class UpdateExpirationForHitRequest {
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("ExpireAt")
    public OffsetDateTime expireAt;
    public UpdateExpirationForHitRequest withExpireAt(OffsetDateTime expireAt) {
        this.expireAt = expireAt;
        return this;
    }
    @JsonProperty("HITId")
    public String hitId;
    public UpdateExpirationForHitRequest withHitId(String hitId) {
        this.hitId = hitId;
        return this;
    }
}