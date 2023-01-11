package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Asset
 * Assets are the images that you use to train and evaluate a model version. Assets can also contain validation information that you use to debug a failed model training. 
**/
public class Asset {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("GroundTruthManifest")
    public GroundTruthManifest groundTruthManifest;
    public Asset withGroundTruthManifest(GroundTruthManifest groundTruthManifest) {
        this.groundTruthManifest = groundTruthManifest;
        return this;
    }
}