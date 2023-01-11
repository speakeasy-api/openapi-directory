package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListConstraintsForPortfolioOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConstraintDetails")
    public ConstraintDetail[] constraintDetails;
    public ListConstraintsForPortfolioOutput withConstraintDetails(ConstraintDetail[] constraintDetails) {
        this.constraintDetails = constraintDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextPageToken")
    public String nextPageToken;
    public ListConstraintsForPortfolioOutput withNextPageToken(String nextPageToken) {
        this.nextPageToken = nextPageToken;
        return this;
    }
}