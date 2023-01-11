package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ProjectComplete {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("collaborators")
    public Collaborator[] collaborators;
    public ProjectComplete withCollaborators(Collaborator[] collaborators) {
        this.collaborators = collaborators;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public ProjectComplete withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("figshare_url")
    public String figshareUrl;
    public ProjectComplete withFigshareUrl(String figshareUrl) {
        this.figshareUrl = figshareUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding")
    public String funding;
    public ProjectComplete withFunding(String funding) {
        this.funding = funding;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("funding_list")
    public FundingInformation[] fundingList;
    public ProjectComplete withFundingList(FundingInformation[] fundingList) {
        this.fundingList = fundingList;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public Long id;
    public ProjectComplete withId(Long id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("published_date")
    public String publishedDate;
    public ProjectComplete withPublishedDate(String publishedDate) {
        this.publishedDate = publishedDate;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public ProjectComplete withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("url")
    public String url;
    public ProjectComplete withUrl(String url) {
        this.url = url;
        return this;
    }
}