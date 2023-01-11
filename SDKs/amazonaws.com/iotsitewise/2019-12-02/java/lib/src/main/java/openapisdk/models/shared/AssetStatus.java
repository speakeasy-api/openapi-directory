package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetStatus
 * Contains information about the current status of an asset. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
**/
public class AssetStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ErrorDetails error;
    public AssetStatus withError(ErrorDetails error) {
        this.error = error;
        return this;
    }
    @JsonProperty("state")
    public AssetStateEnum state;
    public AssetStatus withState(AssetStateEnum state) {
        this.state = state;
        return this;
    }
}