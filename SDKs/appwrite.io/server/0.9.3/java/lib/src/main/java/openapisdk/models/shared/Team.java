package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * Team
 * Team
**/
public class Team {
    @JsonProperty("$id")
    public String dollarId;
    public Team withDollarId(String dollarId) {
        this.dollarId = dollarId;
        return this;
    }
    @JsonProperty("dateCreated")
    public Integer dateCreated;
    public Team withDateCreated(Integer dateCreated) {
        this.dateCreated = dateCreated;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Team withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("sum")
    public Integer sum;
    public Team withSum(Integer sum) {
        this.sum = sum;
        return this;
    }
}