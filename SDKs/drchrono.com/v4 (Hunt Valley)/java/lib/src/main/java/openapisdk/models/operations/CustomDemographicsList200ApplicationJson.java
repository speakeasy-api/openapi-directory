package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CustomDemographicsList200ApplicationJson
 * Paginated Result
**/
public class CustomDemographicsList200ApplicationJson {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("data")
    public openapisdk.models.shared.CustomPatientFieldType[] data;
    public CustomDemographicsList200ApplicationJson withData(openapisdk.models.shared.CustomPatientFieldType[] data) {
        this.data = data;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("next")
    public String next;
    public CustomDemographicsList200ApplicationJson withNext(String next) {
        this.next = next;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("previous")
    public String previous;
    public CustomDemographicsList200ApplicationJson withPrevious(String previous) {
        this.previous = previous;
        return this;
    }
}