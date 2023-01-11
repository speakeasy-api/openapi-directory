package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * AccountPublications
 * The publication history for an account
**/
public class AccountPublications {
    @JsonProperty("links")
    public AccountPublicationsLinks links;
    public AccountPublications withLinks(AccountPublicationsLinks links) {
        this.links = links;
        return this;
    }
    @JsonProperty("publications")
    public PublicationReporting[] publications;
    public AccountPublications withPublications(PublicationReporting[] publications) {
        this.publications = publications;
        return this;
    }
}