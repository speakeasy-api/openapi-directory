package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SourceDefinitionSpecificationRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionSpecification")
    public java.util.Map<String, Object> connectionSpecification;
    public SourceDefinitionSpecificationRead withConnectionSpecification(java.util.Map<String, Object> connectionSpecification) {
        this.connectionSpecification = connectionSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public SourceDefinitionSpecificationRead withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("jobInfo")
    public SynchronousJobRead jobInfo;
    public SourceDefinitionSpecificationRead withJobInfo(SynchronousJobRead jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    @JsonProperty("sourceDefinitionId")
    public String sourceDefinitionId;
    public SourceDefinitionSpecificationRead withSourceDefinitionId(String sourceDefinitionId) {
        this.sourceDefinitionId = sourceDefinitionId;
        return this;
    }
}