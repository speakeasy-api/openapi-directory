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
 * Blueprint
 * The details of a blueprint.
**/
public class Blueprint {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintLocation")
    public String blueprintLocation;
    public Blueprint withBlueprintLocation(String blueprintLocation) {
        this.blueprintLocation = blueprintLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlueprintServiceLocation")
    public String blueprintServiceLocation;
    public Blueprint withBlueprintServiceLocation(String blueprintServiceLocation) {
        this.blueprintServiceLocation = blueprintServiceLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedOn")
    public OffsetDateTime createdOn;
    public Blueprint withCreatedOn(OffsetDateTime createdOn) {
        this.createdOn = createdOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Blueprint withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ErrorMessage")
    public String errorMessage;
    public Blueprint withErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastActiveDefinition")
    public LastActiveDefinition lastActiveDefinition;
    public Blueprint withLastActiveDefinition(LastActiveDefinition lastActiveDefinition) {
        this.lastActiveDefinition = lastActiveDefinition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastModifiedOn")
    public OffsetDateTime lastModifiedOn;
    public Blueprint withLastModifiedOn(OffsetDateTime lastModifiedOn) {
        this.lastModifiedOn = lastModifiedOn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Blueprint withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ParameterSpec")
    public String parameterSpec;
    public Blueprint withParameterSpec(String parameterSpec) {
        this.parameterSpec = parameterSpec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public BlueprintStatusEnum status;
    public Blueprint withStatus(BlueprintStatusEnum status) {
        this.status = status;
        return this;
    }
}