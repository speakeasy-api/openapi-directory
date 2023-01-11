package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateChangesetRequestBody {
    @JsonProperty("changeType")
    public CreateChangesetRequestBodyChangeTypeEnum changeType;
    public CreateChangesetRequestBody withChangeType(CreateChangesetRequestBodyChangeTypeEnum changeType) {
        this.changeType = changeType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatParams")
    public java.util.Map<String, String> formatParams;
    public CreateChangesetRequestBody withFormatParams(java.util.Map<String, String> formatParams) {
        this.formatParams = formatParams;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("formatType")
    public CreateChangesetRequestBodyFormatTypeEnum formatType;
    public CreateChangesetRequestBody withFormatType(CreateChangesetRequestBodyFormatTypeEnum formatType) {
        this.formatType = formatType;
        return this;
    }
    @JsonProperty("sourceParams")
    public java.util.Map<String, String> sourceParams;
    public CreateChangesetRequestBody withSourceParams(java.util.Map<String, String> sourceParams) {
        this.sourceParams = sourceParams;
        return this;
    }
    @JsonProperty("sourceType")
    public CreateChangesetRequestBodySourceTypeEnum sourceType;
    public CreateChangesetRequestBody withSourceType(CreateChangesetRequestBodySourceTypeEnum sourceType) {
        this.sourceType = sourceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tags")
    public java.util.Map<String, String> tags;
    public CreateChangesetRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
}