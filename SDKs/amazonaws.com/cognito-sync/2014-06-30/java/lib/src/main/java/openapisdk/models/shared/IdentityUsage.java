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
 * IdentityUsage
 * Usage information for the identity.
**/
public class IdentityUsage {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataStorage")
    public Long dataStorage;
    public IdentityUsage withDataStorage(Long dataStorage) {
        this.dataStorage = dataStorage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatasetCount")
    public Long datasetCount;
    public IdentityUsage withDatasetCount(Long datasetCount) {
        this.datasetCount = datasetCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityId")
    public String identityId;
    public IdentityUsage withIdentityId(String identityId) {
        this.identityId = identityId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IdentityPoolId")
    public String identityPoolId;
    public IdentityUsage withIdentityPoolId(String identityPoolId) {
        this.identityPoolId = identityPoolId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public IdentityUsage withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
}