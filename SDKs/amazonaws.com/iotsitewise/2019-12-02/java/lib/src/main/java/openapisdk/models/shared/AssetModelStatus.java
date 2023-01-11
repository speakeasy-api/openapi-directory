package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AssetModelStatus
 * Contains current status information for an asset model. For more information, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/asset-and-model-states.html">Asset and model states</a> in the <i>IoT SiteWise User Guide</i>.
**/
public class AssetModelStatus {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("error")
    public ErrorDetails error;
    public AssetModelStatus withError(ErrorDetails error) {
        this.error = error;
        return this;
    }
    @JsonProperty("state")
    public AssetModelStateEnum state;
    public AssetModelStatus withState(AssetModelStateEnum state) {
        this.state = state;
        return this;
    }
}