package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class EulaAcceptance {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("acceptedAt")
    public OffsetDateTime acceptedAt;
    public EulaAcceptance withAcceptedAt(OffsetDateTime acceptedAt) {
        this.acceptedAt = acceptedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("acceptedBy")
    public String acceptedBy;
    public EulaAcceptance withAcceptedBy(String acceptedBy) {
        this.acceptedBy = acceptedBy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("accepteeId")
    public String accepteeId;
    public EulaAcceptance withAccepteeId(String accepteeId) {
        this.accepteeId = accepteeId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaAcceptanceId")
    public String eulaAcceptanceId;
    public EulaAcceptance withEulaAcceptanceId(String eulaAcceptanceId) {
        this.eulaAcceptanceId = eulaAcceptanceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("eulaId")
    public String eulaId;
    public EulaAcceptance withEulaId(String eulaId) {
        this.eulaId = eulaId;
        return this;
    }
}