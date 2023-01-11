package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetTerminologyResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyDataLocation")
    public TerminologyDataLocation terminologyDataLocation;
    public GetTerminologyResponse withTerminologyDataLocation(TerminologyDataLocation terminologyDataLocation) {
        this.terminologyDataLocation = terminologyDataLocation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TerminologyProperties")
    public TerminologyProperties terminologyProperties;
    public GetTerminologyResponse withTerminologyProperties(TerminologyProperties terminologyProperties) {
        this.terminologyProperties = terminologyProperties;
        return this;
    }
}