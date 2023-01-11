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
 * ClientAuthenticationSettingInfo
 * Contains information about a client authentication method for a directory.
**/
public class ClientAuthenticationSettingInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedDateTime")
    public OffsetDateTime lastUpdatedDateTime;
    public ClientAuthenticationSettingInfo withLastUpdatedDateTime(OffsetDateTime lastUpdatedDateTime) {
        this.lastUpdatedDateTime = lastUpdatedDateTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ClientAuthenticationStatusEnum status;
    public ClientAuthenticationSettingInfo withStatus(ClientAuthenticationStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public ClientAuthenticationTypeEnum type;
    public ClientAuthenticationSettingInfo withType(ClientAuthenticationTypeEnum type) {
        this.type = type;
        return this;
    }
}