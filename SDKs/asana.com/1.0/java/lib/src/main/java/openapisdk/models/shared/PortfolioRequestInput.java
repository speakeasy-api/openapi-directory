package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * PortfolioRequestInput
 * A *portfolio* gives a high-level overview of the status of multiple initiatives in Asana. Portfolios provide a dashboard overview of the state of multiple projects, including a progress report and the most recent [project status](/docs/asana-project-statuses) update.
 * Portfolios have some restrictions on size. Each portfolio has a max of 250 items and, like projects, a max of 20 custom fields.
**/
public class PortfolioRequestInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("color")
    public PortfolioRequestColorEnum color;
    public PortfolioRequestInput withColor(PortfolioRequestColorEnum color) {
        this.color = color;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("members")
    public String[] members;
    public PortfolioRequestInput withMembers(String[] members) {
        this.members = members;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public PortfolioRequestInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workspace")
    public String workspace;
    public PortfolioRequestInput withWorkspace(String workspace) {
        this.workspace = workspace;
        return this;
    }
}