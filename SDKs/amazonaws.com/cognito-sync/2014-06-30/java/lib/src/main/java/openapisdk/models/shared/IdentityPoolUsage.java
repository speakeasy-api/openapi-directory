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
 * IdentityPoolUsage
 * Usage information for the identity pool.
**/
public class IdentityPoolUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataStorage")
    public Long dataStorage;
    public IdentityPoolUsage withDataStorage(Long dataStorage) {
        this.dataStorage = dataStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public IdentityPoolUsage withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public IdentityPoolUsage withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SyncSessionsCount")
    public Long syncSessionsCount;
    public IdentityPoolUsage withSyncSessionsCount(Long syncSessionsCount) {
        this.syncSessionsCount = syncSessionsCount;
        return this;
    }
}