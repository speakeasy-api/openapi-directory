package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TrainingData
 * The dataset used for training.
**/
public class TrainingData {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Assets")
    public Asset[] assets;
    public TrainingData withAssets(Asset[] assets) {
        this.assets = assets;
        return this;
    }
}