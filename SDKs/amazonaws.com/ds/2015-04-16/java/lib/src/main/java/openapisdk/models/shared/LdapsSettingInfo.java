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
 * LdapsSettingInfo
 * Contains general information about the LDAPS settings.
**/
public class LdapsSettingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LDAPSStatus")
    public LdapsStatusEnum ldapsStatus;
    public LdapsSettingInfo withLdapsStatus(LdapsStatusEnum ldapsStatus) {
        this.ldapsStatus = ldapsStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LDAPSStatusReason")
    public String ldapsStatusReason;
    public LdapsSettingInfo withLdapsStatusReason(String ldapsStatusReason) {
        this.ldapsStatusReason = ldapsStatusReason;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public LdapsSettingInfo withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
}