package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class FormEntryAttributes {
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created")
    public OffsetDateTime created;
    public FormEntryAttributes withCreated(OffsetDateTime created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("fields")
    public FormEntryField[] fields;
    public FormEntryAttributes withFields(FormEntryField[] fields) {
        this.fields = fields;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("modified")
    public OffsetDateTime modified;
    public FormEntryAttributes withModified(OffsetDateTime modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("paths")
    public String[] paths;
    public FormEntryAttributes withPaths(String[] paths) {
        this.paths = paths;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public FormEntryAttributesStatusEnum status;
    public FormEntryAttributes withStatus(FormEntryAttributesStatusEnum status) {
        this.status = status;
        return this;
    }
}