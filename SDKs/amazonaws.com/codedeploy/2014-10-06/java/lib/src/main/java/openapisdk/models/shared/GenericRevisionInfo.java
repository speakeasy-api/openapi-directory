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
 * GenericRevisionInfo
 * Information about an application revision.
**/
public class GenericRevisionInfo {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deploymentGroups")
    public String[] deploymentGroups;
    public GenericRevisionInfo withDeploymentGroups(String[] deploymentGroups) {
        this.deploymentGroups = deploymentGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public GenericRevisionInfo withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("firstUsedTime")
    public OffsetDateTime firstUsedTime;
    public GenericRevisionInfo withFirstUsedTime(OffsetDateTime firstUsedTime) {
        this.firstUsedTime = firstUsedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("lastUsedTime")
    public OffsetDateTime lastUsedTime;
    public GenericRevisionInfo withLastUsedTime(OffsetDateTime lastUsedTime) {
        this.lastUsedTime = lastUsedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("registerTime")
    public OffsetDateTime registerTime;
    public GenericRevisionInfo withRegisterTime(OffsetDateTime registerTime) {
        this.registerTime = registerTime;
        return this;
    }
}