package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DestinationDefinitionSpecificationRead {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectionSpecification")
    public Object connectionSpecification;
    public DestinationDefinitionSpecificationRead withConnectionSpecification(Object connectionSpecification) {
        this.connectionSpecification = connectionSpecification;
        return this;
    }
    @JsonProperty("destinationDefinitionId")
    public String destinationDefinitionId;
    public DestinationDefinitionSpecificationRead withDestinationDefinitionId(String destinationDefinitionId) {
        this.destinationDefinitionId = destinationDefinitionId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("documentationUrl")
    public String documentationUrl;
    public DestinationDefinitionSpecificationRead withDocumentationUrl(String documentationUrl) {
        this.documentationUrl = documentationUrl;
        return this;
    }
    @JsonProperty("jobInfo")
    public SynchronousJobRead jobInfo;
    public DestinationDefinitionSpecificationRead withJobInfo(SynchronousJobRead jobInfo) {
        this.jobInfo = jobInfo;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedDestinationSyncModes")
    public DestinationSyncModeEnum[] supportedDestinationSyncModes;
    public DestinationDefinitionSpecificationRead withSupportedDestinationSyncModes(DestinationSyncModeEnum[] supportedDestinationSyncModes) {
        this.supportedDestinationSyncModes = supportedDestinationSyncModes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsDbt")
    public Boolean supportsDbt;
    public DestinationDefinitionSpecificationRead withSupportsDbt(Boolean supportsDbt) {
        this.supportsDbt = supportsDbt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportsNormalization")
    public Boolean supportsNormalization;
    public DestinationDefinitionSpecificationRead withSupportsNormalization(Boolean supportsNormalization) {
        this.supportsNormalization = supportsNormalization;
        return this;
    }
}