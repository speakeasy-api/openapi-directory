package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InputDataConfig
 * The data used to train a predictor. The data includes a dataset group and any supplementary features. You specify this object in the <a>CreatePredictor</a> request.
**/
public class InputDataConfig {
    @JsonProperty("DatasetGroupArn")
    public String datasetGroupArn;
    public InputDataConfig withDatasetGroupArn(String datasetGroupArn) {
        this.datasetGroupArn = datasetGroupArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupplementaryFeatures")
    public SupplementaryFeature[] supplementaryFeatures;
    public InputDataConfig withSupplementaryFeatures(SupplementaryFeature[] supplementaryFeatures) {
        this.supplementaryFeatures = supplementaryFeatures;
        return this;
    }
}