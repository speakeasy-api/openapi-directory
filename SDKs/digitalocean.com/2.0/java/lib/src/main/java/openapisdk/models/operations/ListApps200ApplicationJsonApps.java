package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ListApps200ApplicationJsonApps
 * An application's configuration and status.
**/
public class ListApps200ApplicationJsonApps {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("active_deployment")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems activeDeployment;
    public ListApps200ApplicationJsonApps withActiveDeployment(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems activeDeployment) {
        this.activeDeployment = activeDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListApps200ApplicationJsonApps withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("default_ingress")
    public String defaultIngress;
    public ListApps200ApplicationJsonApps withDefaultIngress(String defaultIngress) {
        this.defaultIngress = defaultIngress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public ListApps200ApplicationJsonAppsDomains[] domains;
    public ListApps200ApplicationJsonApps withDomains(ListApps200ApplicationJsonAppsDomains[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListApps200ApplicationJsonApps withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("in_progress_deployment")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems inProgressDeployment;
    public ListApps200ApplicationJsonApps withInProgressDeployment(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItems inProgressDeployment) {
        this.inProgressDeployment = inProgressDeployment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("last_deployment_created_at")
    public OffsetDateTime lastDeploymentCreatedAt;
    public ListApps200ApplicationJsonApps withLastDeploymentCreatedAt(OffsetDateTime lastDeploymentCreatedAt) {
        this.lastDeploymentCreatedAt = lastDeploymentCreatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_domain")
    public String liveDomain;
    public ListApps200ApplicationJsonApps withLiveDomain(String liveDomain) {
        this.liveDomain = liveDomain;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_url")
    public String liveUrl;
    public ListApps200ApplicationJsonApps withLiveUrl(String liveUrl) {
        this.liveUrl = liveUrl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("live_url_base")
    public String liveUrlBase;
    public ListApps200ApplicationJsonApps withLiveUrlBase(String liveUrlBase) {
        this.liveUrlBase = liveUrlBase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("owner_uuid")
    public String ownerUuid;
    public ListApps200ApplicationJsonApps withOwnerUuid(String ownerUuid) {
        this.ownerUuid = ownerUuid;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin region;
    public ListApps200ApplicationJsonApps withRegion(ListApps200ApplicationJsonAppsGeographicalInformationAboutAnAppOrigin region) {
        this.region = region;
        return this;
    }
    @JsonProperty("spec")
    public openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec;
    public ListApps200ApplicationJsonApps withSpec(openapisdk.models.shared.Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_slug")
    public String tierSlug;
    public ListApps200ApplicationJsonApps withTierSlug(String tierSlug) {
        this.tierSlug = tierSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ListApps200ApplicationJsonApps withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
}