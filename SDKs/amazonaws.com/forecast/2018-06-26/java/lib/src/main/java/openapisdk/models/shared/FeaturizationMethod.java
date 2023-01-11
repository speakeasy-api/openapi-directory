package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * FeaturizationMethod
 * <p>Provides information about the method that featurizes (transforms) a dataset field. The method is part of the <code>FeaturizationPipeline</code> of the <a>Featurization</a> object. </p> <p>The following is an example of how you specify a <code>FeaturizationMethod</code> object.</p> <p> <code>{</code> </p> <p> <code>"FeaturizationMethodName": "filling",</code> </p> <p> <code>"FeaturizationMethodParameters": {"aggregation": "sum", "middlefill": "zero", "backfill": "zero"}</code> </p> <p> <code>}</code> </p>
**/
public class FeaturizationMethod {
    @JsonProperty("FeaturizationMethodName")
    public FeaturizationMethodNameEnum featurizationMethodName;
    public FeaturizationMethod withFeaturizationMethodName(FeaturizationMethodNameEnum featurizationMethodName) {
        this.featurizationMethodName = featurizationMethodName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FeaturizationMethodParameters")
    public java.util.Map<String, String> featurizationMethodParameters;
    public FeaturizationMethod withFeaturizationMethodParameters(java.util.Map<String, String> featurizationMethodParameters) {
        this.featurizationMethodParameters = featurizationMethodParameters;
        return this;
    }
}