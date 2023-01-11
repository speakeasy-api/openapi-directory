package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ConnectorConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUseAsDestination")
    public Boolean canUseAsDestination;
    public ConnectorConfiguration withCanUseAsDestination(Boolean canUseAsDestination) {
        this.canUseAsDestination = canUseAsDestination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("canUseAsSource")
    public Boolean canUseAsSource;
    public ConnectorConfiguration withCanUseAsSource(Boolean canUseAsSource) {
        this.canUseAsSource = canUseAsSource;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connectorMetadata")
    public ConnectorMetadata connectorMetadata;
    public ConnectorConfiguration withConnectorMetadata(ConnectorMetadata connectorMetadata) {
        this.connectorMetadata = connectorMetadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPrivateLinkEnabled")
    public Boolean isPrivateLinkEnabled;
    public ConnectorConfiguration withIsPrivateLinkEnabled(Boolean isPrivateLinkEnabled) {
        this.isPrivateLinkEnabled = isPrivateLinkEnabled;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("isPrivateLinkEndpointUrlRequired")
    public Boolean isPrivateLinkEndpointUrlRequired;
    public ConnectorConfiguration withIsPrivateLinkEndpointUrlRequired(Boolean isPrivateLinkEndpointUrlRequired) {
        this.isPrivateLinkEndpointUrlRequired = isPrivateLinkEndpointUrlRequired;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedDestinationConnectors")
    public ConnectorTypeEnum[] supportedDestinationConnectors;
    public ConnectorConfiguration withSupportedDestinationConnectors(ConnectorTypeEnum[] supportedDestinationConnectors) {
        this.supportedDestinationConnectors = supportedDestinationConnectors;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedSchedulingFrequencies")
    public ScheduleFrequencyTypeEnum[] supportedSchedulingFrequencies;
    public ConnectorConfiguration withSupportedSchedulingFrequencies(ScheduleFrequencyTypeEnum[] supportedSchedulingFrequencies) {
        this.supportedSchedulingFrequencies = supportedSchedulingFrequencies;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("supportedTriggerTypes")
    public TriggerTypeEnum[] supportedTriggerTypes;
    public ConnectorConfiguration withSupportedTriggerTypes(TriggerTypeEnum[] supportedTriggerTypes) {
        this.supportedTriggerTypes = supportedTriggerTypes;
        return this;
    }
}