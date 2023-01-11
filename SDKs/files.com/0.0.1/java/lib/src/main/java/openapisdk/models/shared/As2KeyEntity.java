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
 * As2KeyEntity
 * List As2 Keys
**/
public class As2KeyEntity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("as2_partnership_name")
    public String as2PartnershipName;
    public As2KeyEntity withAs2PartnershipName(String as2PartnershipName) {
        this.as2PartnershipName = as2PartnershipName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public As2KeyEntity withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fingerprint")
    public String fingerprint;
    public As2KeyEntity withFingerprint(String fingerprint) {
        this.fingerprint = fingerprint;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Integer id;
    public As2KeyEntity withId(Integer id) {
        this.id = id;
        return this;
    }
}