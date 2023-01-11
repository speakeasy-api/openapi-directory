package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectUpdate {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProjectUpdate withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ProjectUpdate withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public FundingCreate[] fundingList;
    public ProjectUpdate withFundingList(FundingCreate[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectUpdate withTitle(String title) {
        this.title = title;
        return this;
    }
}