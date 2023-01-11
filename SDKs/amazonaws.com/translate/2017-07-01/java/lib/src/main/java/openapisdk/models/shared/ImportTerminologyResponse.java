package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ImportTerminologyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyProperties")
    public TerminologyProperties terminologyProperties;
    public ImportTerminologyResponse withTerminologyProperties(TerminologyProperties terminologyProperties) {
        this.terminologyProperties = terminologyProperties;
        return this;
    }
}