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
 * CustomPluginRevisionSummary
 * Details about the revision of a custom plugin.
**/
public class CustomPluginRevisionSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("contentType")
    public CustomPluginContentTypeEnum contentType;
    public CustomPluginRevisionSummary withContentType(CustomPluginContentTypeEnum contentType) {
        this.contentType = contentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("creationTime")
    public OffsetDateTime creationTime;
    public CustomPluginRevisionSummary withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public CustomPluginRevisionSummary withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fileDescription")
    public CustomPluginFileDescription fileDescription;
    public CustomPluginRevisionSummary withFileDescription(CustomPluginFileDescription fileDescription) {
        this.fileDescription = fileDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("location")
    public CustomPluginLocationDescription location;
    public CustomPluginRevisionSummary withLocation(CustomPluginLocationDescription location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("revision")
    public Long revision;
    public CustomPluginRevisionSummary withRevision(Long revision) {
        this.revision = revision;
        return this;
    }
}