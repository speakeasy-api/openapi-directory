package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Featurization
 * <p>Provides featurization (transformation) information for a dataset field. This object is part of the <a>FeaturizationConfig</a> object.</p> <p>For example:</p> <p> <code>{</code> </p> <p> <code>"AttributeName": "demand",</code> </p> <p> <code>FeaturizationPipeline [ {</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "avg", "backfill": "nan"}</code> </p> <p> <code>} ]</code> </p> <p> <code>}</code> </p>
**/
public class Featurization {
    @JsonProperty("AttributeName")
    public String attributeName;
    public Featurization withAttributeName(String attributeName) {
        this.attributeName = attributeName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeaturizationPipeline")
    public FeaturizationMethod[] featurizationPipeline;
    public Featurization withFeaturizationPipeline(FeaturizationMethod[] featurizationPipeline) {
        this.featurizationPipeline = featurizationPipeline;
        return this;
    }
}