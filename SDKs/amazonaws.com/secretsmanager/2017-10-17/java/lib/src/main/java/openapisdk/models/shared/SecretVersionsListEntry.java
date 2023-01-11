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
 * SecretVersionsListEntry
 * A structure that contains information about one version of a secret.
**/
public class SecretVersionsListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedDate")
    public OffsetDateTime createdDate;
    public SecretVersionsListEntry withCreatedDate(OffsetDateTime createdDate) {
        this.createdDate = createdDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyIds")
    public String[] kmsKeyIds;
    public SecretVersionsListEntry withKmsKeyIds(String[] kmsKeyIds) {
        this.kmsKeyIds = kmsKeyIds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastAccessedDate")
    public OffsetDateTime lastAccessedDate;
    public SecretVersionsListEntry withLastAccessedDate(OffsetDateTime lastAccessedDate) {
        this.lastAccessedDate = lastAccessedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionId")
    public String versionId;
    public SecretVersionsListEntry withVersionId(String versionId) {
        this.versionId = versionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VersionStages")
    public String[] versionStages;
    public SecretVersionsListEntry withVersionStages(String[] versionStages) {
        this.versionStages = versionStages;
        return this;
    }
}