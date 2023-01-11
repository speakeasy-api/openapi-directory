package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeaturizationConfig
 * <p>In a <a>CreatePredictor</a> operation, the specified algorithm trains a model using the specified dataset group. You can optionally tell the operation to modify data fields prior to training a model. These modifications are referred to as <i>featurization</i>.</p> <p>You define featurization using the <code>FeaturizationConfig</code> object. You specify an array of transformations, one for each field that you want to featurize. You then include the <code>FeaturizationConfig</code> object in your <code>CreatePredictor</code> request. Amazon Forecast applies the featurization to the <code>TARGET_TIME_SERIES</code> and <code>RELATED_TIME_SERIES</code> datasets before model training.</p> <p>You can create multiple featurization configurations. For example, you might call the <code>CreatePredictor</code> operation twice by specifying different featurization configurations.</p>
**/
public class FeaturizationConfig {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Featurizations")
    public Featurization[] featurizations;
    public FeaturizationConfig withFeaturizations(Featurization[] featurizations) {
        this.featurizations = featurizations;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ForecastDimensions")
    public String[] forecastDimensions;
    public FeaturizationConfig withForecastDimensions(String[] forecastDimensions) {
        this.forecastDimensions = forecastDimensions;
        return this;
    }
    @JsonProperty("ForecastFrequency")
    public String forecastFrequency;
    public FeaturizationConfig withForecastFrequency(String forecastFrequency) {
        this.forecastFrequency = forecastFrequency;
        return this;
    }
}