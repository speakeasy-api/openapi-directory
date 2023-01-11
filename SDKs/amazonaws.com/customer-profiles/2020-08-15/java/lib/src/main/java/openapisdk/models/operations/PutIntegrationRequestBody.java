package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class PutIntegrationRequestBody {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FlowDefinition")
    public PutIntegrationRequestBodyFlowDefinition flowDefinition;
    public PutIntegrationRequestBody withFlowDefinition(PutIntegrationRequestBodyFlowDefinition flowDefinition) {
        this.flowDefinition = flowDefinition;
        return this;
    }
    @JsonProperty("ObjectTypeName")
    public String objectTypeName;
    public PutIntegrationRequestBody withObjectTypeName(String objectTypeName) {
        this.objectTypeName = objectTypeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public PutIntegrationRequestBody withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Uri")
    public String uri;
    public PutIntegrationRequestBody withUri(String uri) {
        this.uri = uri;
        return this;
    }
}