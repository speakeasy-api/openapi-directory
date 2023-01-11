package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateProductInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public UpdateProductInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AddTags")
    public Tag[] addTags;
    public UpdateProductInput withAddTags(Tag[] addTags) {
        this.addTags = addTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public UpdateProductInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Distributor")
    public String distributor;
    public UpdateProductInput withDistributor(String distributor) {
        this.distributor = distributor;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public UpdateProductInput withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public UpdateProductInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public UpdateProductInput withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RemoveTags")
    public String[] removeTags;
    public UpdateProductInput withRemoveTags(String[] removeTags) {
        this.removeTags = removeTags;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportDescription")
    public String supportDescription;
    public UpdateProductInput withSupportDescription(String supportDescription) {
        this.supportDescription = supportDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportEmail")
    public String supportEmail;
    public UpdateProductInput withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportUrl")
    public String supportUrl;
    public UpdateProductInput withSupportUrl(String supportUrl) {
        this.supportUrl = supportUrl;
        return this;
    }
}