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
 * RoleAliasDescription
 * Role alias description.
**/
public class RoleAliasDescription {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationDate")
    public OffsetDateTime creationDate;
    public RoleAliasDescription withCreationDate(OffsetDateTime creationDate) {
        this.creationDate = creationDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("credentialDurationSeconds")
    public Long credentialDurationSeconds;
    public RoleAliasDescription withCredentialDurationSeconds(Long credentialDurationSeconds) {
        this.credentialDurationSeconds = credentialDurationSeconds;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastModifiedDate")
    public OffsetDateTime lastModifiedDate;
    public RoleAliasDescription withLastModifiedDate(OffsetDateTime lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner")
    public String owner;
    public RoleAliasDescription withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAlias")
    public String roleAlias;
    public RoleAliasDescription withRoleAlias(String roleAlias) {
        this.roleAlias = roleAlias;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleAliasArn")
    public String roleAliasArn;
    public RoleAliasDescription withRoleAliasArn(String roleAliasArn) {
        this.roleAliasArn = roleAliasArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("roleArn")
    public String roleArn;
    public RoleAliasDescription withRoleArn(String roleArn) {
        this.roleArn = roleArn;
        return this;
    }
}