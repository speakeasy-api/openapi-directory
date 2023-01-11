package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class LabOrderIcd10Code {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("code")
    public String code;
    public LabOrderIcd10Code withCode(String code) {
        this.code = code;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public LabOrderIcd10Code withDescription(String description) {
        this.description = description;
        return this;
    }
}