package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfusionMatrix
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p> <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
**/
public class ConfusionMatrix {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumFalseNegatives")
    public Long numFalseNegatives;
    public ConfusionMatrix withNumFalseNegatives(Long numFalseNegatives) {
        this.numFalseNegatives = numFalseNegatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumFalsePositives")
    public Long numFalsePositives;
    public ConfusionMatrix withNumFalsePositives(Long numFalsePositives) {
        this.numFalsePositives = numFalsePositives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumTrueNegatives")
    public Long numTrueNegatives;
    public ConfusionMatrix withNumTrueNegatives(Long numTrueNegatives) {
        this.numTrueNegatives = numTrueNegatives;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NumTruePositives")
    public Long numTruePositives;
    public ConfusionMatrix withNumTruePositives(Long numTruePositives) {
        this.numTruePositives = numTruePositives;
        return this;
    }
}