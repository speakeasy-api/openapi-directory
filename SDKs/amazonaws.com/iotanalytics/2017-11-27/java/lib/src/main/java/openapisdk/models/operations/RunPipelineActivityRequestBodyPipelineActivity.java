package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * RunPipelineActivityRequestBodyPipelineActivity
 * An activity that performs a transformation on a message.
**/
public class RunPipelineActivityRequestBodyPipelineActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addAttributes")
    public openapisdk.models.shared.AddAttributesActivity addAttributes;
    public RunPipelineActivityRequestBodyPipelineActivity withAddAttributes(openapisdk.models.shared.AddAttributesActivity addAttributes) {
        this.addAttributes = addAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public openapisdk.models.shared.ChannelActivity channel;
    public RunPipelineActivityRequestBodyPipelineActivity withChannel(openapisdk.models.shared.ChannelActivity channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastore")
    public openapisdk.models.shared.DatastoreActivity datastore;
    public RunPipelineActivityRequestBodyPipelineActivity withDatastore(openapisdk.models.shared.DatastoreActivity datastore) {
        this.datastore = datastore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceRegistryEnrich")
    public openapisdk.models.shared.DeviceRegistryEnrichActivity deviceRegistryEnrich;
    public RunPipelineActivityRequestBodyPipelineActivity withDeviceRegistryEnrich(openapisdk.models.shared.DeviceRegistryEnrichActivity deviceRegistryEnrich) {
        this.deviceRegistryEnrich = deviceRegistryEnrich;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceShadowEnrich")
    public openapisdk.models.shared.DeviceShadowEnrichActivity deviceShadowEnrich;
    public RunPipelineActivityRequestBodyPipelineActivity withDeviceShadowEnrich(openapisdk.models.shared.DeviceShadowEnrichActivity deviceShadowEnrich) {
        this.deviceShadowEnrich = deviceShadowEnrich;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public openapisdk.models.shared.FilterActivity filter;
    public RunPipelineActivityRequestBodyPipelineActivity withFilter(openapisdk.models.shared.FilterActivity filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambda")
    public openapisdk.models.shared.LambdaActivity lambda;
    public RunPipelineActivityRequestBodyPipelineActivity withLambda(openapisdk.models.shared.LambdaActivity lambda) {
        this.lambda = lambda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("math")
    public openapisdk.models.shared.MathActivity math;
    public RunPipelineActivityRequestBodyPipelineActivity withMath(openapisdk.models.shared.MathActivity math) {
        this.math = math;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeAttributes")
    public openapisdk.models.shared.RemoveAttributesActivity removeAttributes;
    public RunPipelineActivityRequestBodyPipelineActivity withRemoveAttributes(openapisdk.models.shared.RemoveAttributesActivity removeAttributes) {
        this.removeAttributes = removeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectAttributes")
    public openapisdk.models.shared.SelectAttributesActivity selectAttributes;
    public RunPipelineActivityRequestBodyPipelineActivity withSelectAttributes(openapisdk.models.shared.SelectAttributesActivity selectAttributes) {
        this.selectAttributes = selectAttributes;
        return this;
    }
}