package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Term {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("end_date")
    public String endDate;
    public Term withEndDate(String endDate) {
        this.endDate = endDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public Term withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("start_date")
    public String startDate;
    public Term withStartDate(String startDate) {
        this.startDate = startDate;
        return this;
    }
}