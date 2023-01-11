package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems
 * An application's configuration and status.
**/
public class Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_deployment")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems activeDeployment;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withActiveDeployment(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems activeDeployment) {
        this.activeDeployment = activeDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_ingress")
    public String defaultIngress;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withDefaultIngress(String defaultIngress) {
        this.defaultIngress = defaultIngress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains[] domains;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withDomains(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsDomains[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_progress_deployment")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems inProgressDeployment;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withInProgressDeployment(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems inProgressDeployment) {
        this.inProgressDeployment = inProgressDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_deployment_created_at")
    public OffsetDateTime lastDeploymentCreatedAt;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withLastDeploymentCreatedAt(OffsetDateTime lastDeploymentCreatedAt) {
        this.lastDeploymentCreatedAt = lastDeploymentCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_domain")
    public String liveDomain;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withLiveDomain(String liveDomain) {
        this.liveDomain = liveDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_url")
    public String liveUrl;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_url_base")
    public String liveUrlBase;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withLiveUrlBase(String liveUrlBase) {
        this.liveUrlBase = liveUrlBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_uuid")
    public String ownerUuid;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin region;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withRegion(Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItemsGeographicalInformationAboutAnAppOrigin region) {
        this.region = region;
        return this;
    }
    @JsonProperty("spec")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withSpec(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_slug")
    public String tierSlug;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withTierSlug(String tierSlug) {
        this.tierSlug = tierSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public Onev21appsGetResponses200ContentApplication1jsonSchemaPropertiesAppsItems withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}