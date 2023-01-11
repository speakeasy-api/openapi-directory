package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class OperatorNormalization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("option")
    public OperatorNormalizationOptionEnum option;
    public OperatorNormalization withOption(OperatorNormalizationOptionEnum option) {
        this.option = option;
        return this;
    }
}