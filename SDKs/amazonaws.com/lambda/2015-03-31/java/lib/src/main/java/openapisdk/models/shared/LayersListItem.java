package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * LayersListItem
 * Details about an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">Lambda layer</a>.
**/
public class LayersListItem {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LatestMatchingVersion")
    public LayerVersionsListItem latestMatchingVersion;
    public LayersListItem withLatestMatchingVersion(LayerVersionsListItem latestMatchingVersion) {
        this.latestMatchingVersion = latestMatchingVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerArn")
    public String layerArn;
    public LayersListItem withLayerArn(String layerArn) {
        this.layerArn = layerArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LayerName")
    public String layerName;
    public LayersListItem withLayerName(String layerName) {
        this.layerName = layerName;
        return this;
    }
}