package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateProductInput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AcceptLanguage")
    public String acceptLanguage;
    public CreateProductInput withAcceptLanguage(String acceptLanguage) {
        this.acceptLanguage = acceptLanguage;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public CreateProductInput withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Distributor")
    public String distributor;
    public CreateProductInput withDistributor(String distributor) {
        this.distributor = distributor;
        return this;
    }
    @JsonProperty("IdempotencyToken")
    public String idempotencyToken;
    public CreateProductInput withIdempotencyToken(String idempotencyToken) {
        this.idempotencyToken = idempotencyToken;
        return this;
    }
    @JsonProperty("Name")
    public String name;
    public CreateProductInput withName(String name) {
        this.name = name;
        return this;
    }
    @JsonProperty("Owner")
    public String owner;
    public CreateProductInput withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonProperty("ProductType")
    public ProductTypeEnum productType;
    public CreateProductInput withProductType(ProductTypeEnum productType) {
        this.productType = productType;
        return this;
    }
    @JsonProperty("ProvisioningArtifactParameters")
    public ProvisioningArtifactProperties provisioningArtifactParameters;
    public CreateProductInput withProvisioningArtifactParameters(ProvisioningArtifactProperties provisioningArtifactParameters) {
        this.provisioningArtifactParameters = provisioningArtifactParameters;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportDescription")
    public String supportDescription;
    public CreateProductInput withSupportDescription(String supportDescription) {
        this.supportDescription = supportDescription;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportEmail")
    public String supportEmail;
    public CreateProductInput withSupportEmail(String supportEmail) {
        this.supportEmail = supportEmail;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SupportUrl")
    public String supportUrl;
    public CreateProductInput withSupportUrl(String supportUrl) {
        this.supportUrl = supportUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public Tag[] tags;
    public CreateProductInput withTags(Tag[] tags) {
        this.tags = tags;
        return this;
    }
}