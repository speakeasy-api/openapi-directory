package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PipelineActivity
 * An activity that performs a transformation on a message.
**/
public class PipelineActivity {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("addAttributes")
    public AddAttributesActivity addAttributes;
    public PipelineActivity withAddAttributes(AddAttributesActivity addAttributes) {
        this.addAttributes = addAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("channel")
    public ChannelActivity channel;
    public PipelineActivity withChannel(ChannelActivity channel) {
        this.channel = channel;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("datastore")
    public DatastoreActivity datastore;
    public PipelineActivity withDatastore(DatastoreActivity datastore) {
        this.datastore = datastore;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceRegistryEnrich")
    public DeviceRegistryEnrichActivity deviceRegistryEnrich;
    public PipelineActivity withDeviceRegistryEnrich(DeviceRegistryEnrichActivity deviceRegistryEnrich) {
        this.deviceRegistryEnrich = deviceRegistryEnrich;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("deviceShadowEnrich")
    public DeviceShadowEnrichActivity deviceShadowEnrich;
    public PipelineActivity withDeviceShadowEnrich(DeviceShadowEnrichActivity deviceShadowEnrich) {
        this.deviceShadowEnrich = deviceShadowEnrich;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("filter")
    public FilterActivity filter;
    public PipelineActivity withFilter(FilterActivity filter) {
        this.filter = filter;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("lambda")
    public LambdaActivity lambda;
    public PipelineActivity withLambda(LambdaActivity lambda) {
        this.lambda = lambda;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("math")
    public MathActivity math;
    public PipelineActivity withMath(MathActivity math) {
        this.math = math;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("removeAttributes")
    public RemoveAttributesActivity removeAttributes;
    public PipelineActivity withRemoveAttributes(RemoveAttributesActivity removeAttributes) {
        this.removeAttributes = removeAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("selectAttributes")
    public SelectAttributesActivity selectAttributes;
    public PipelineActivity withSelectAttributes(SelectAttributesActivity selectAttributes) {
        this.selectAttributes = selectAttributes;
        return this;
    }
}