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
 * AliasListEntry
 * Contains information about an alias.
**/
public class AliasListEntry {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasArn")
    public String aliasArn;
    public AliasListEntry withAliasArn(String aliasArn) {
        this.aliasArn = aliasArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AliasName")
    public String aliasName;
    public AliasListEntry withAliasName(String aliasName) {
        this.aliasName = aliasName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationDate")
    public OffsetDateTime creationDate;
    public AliasListEntry withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedDate")
    public OffsetDateTime lastUpdatedDate;
    public AliasListEntry withLastUpdatedDate(OffsetDateTime lastUpdatedDate) {
        this.lastUpdatedDate = lastUpdatedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetKeyId")
    public String targetKeyId;
    public AliasListEntry withTargetKeyId(String targetKeyId) {
        this.targetKeyId = targetKeyId;
        return this;
    }
}