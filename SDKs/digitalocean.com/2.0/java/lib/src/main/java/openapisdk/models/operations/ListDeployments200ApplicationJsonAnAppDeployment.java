package openapisdk.models.operations;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

public class ListDeployments200ApplicationJsonAnAppDeployment {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cause")
    public String cause;
    public ListDeployments200ApplicationJsonAnAppDeployment withCause(String cause) {
        this.cause = cause;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cloned_from")
    public String clonedFrom;
    public ListDeployments200ApplicationJsonAnAppDeployment withClonedFrom(String clonedFrom) {
        this.clonedFrom = clonedFrom;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("created_at")
    public OffsetDateTime createdAt;
    public ListDeployments200ApplicationJsonAnAppDeployment withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public ListDeployments200ApplicationJsonAnAppDeployment withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public ListDeployments200ApplicationJsonAnAppDeploymentJobs[] jobs;
    public ListDeployments200ApplicationJsonAnAppDeployment withJobs(ListDeployments200ApplicationJsonAnAppDeploymentJobs[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("phase")
    public ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum phase;
    public ListDeployments200ApplicationJsonAnAppDeployment withPhase(ListDeployments200ApplicationJsonAnAppDeploymentPhaseEnum phase) {
        this.phase = phase;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("phase_last_updated_at")
    public OffsetDateTime phaseLastUpdatedAt;
    public ListDeployments200ApplicationJsonAnAppDeployment withPhaseLastUpdatedAt(OffsetDateTime phaseLastUpdatedAt) {
        this.phaseLastUpdatedAt = phaseLastUpdatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("progress")
    public ListDeployments200ApplicationJsonAnAppDeploymentProgress progress;
    public ListDeployments200ApplicationJsonAnAppDeployment withProgress(ListDeployments200ApplicationJsonAnAppDeploymentProgress progress) {
        this.progress = progress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public ListDeployments200ApplicationJsonAnAppDeploymentServices[] services;
    public ListDeployments200ApplicationJsonAnAppDeployment withServices(ListDeployments200ApplicationJsonAnAppDeploymentServices[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("spec")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec spec;
    public ListDeployments200ApplicationJsonAnAppDeployment withSpec(ListDeployments200ApplicationJsonAnAppDeploymentAppSpec spec) {
        this.spec = spec;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("static_sites")
    public ListDeployments200ApplicationJsonAnAppDeploymentStaticSites[] staticSites;
    public ListDeployments200ApplicationJsonAnAppDeployment withStaticSites(ListDeployments200ApplicationJsonAnAppDeploymentStaticSites[] staticSites) {
        this.staticSites = staticSites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("tier_slug")
    public String tierSlug;
    public ListDeployments200ApplicationJsonAnAppDeployment withTierSlug(String tierSlug) {
        this.tierSlug = tierSlug;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("updated_at")
    public OffsetDateTime updatedAt;
    public ListDeployments200ApplicationJsonAnAppDeployment withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workers")
    public ListDeployments200ApplicationJsonAnAppDeploymentWorkers[] workers;
    public ListDeployments200ApplicationJsonAnAppDeployment withWorkers(ListDeployments200ApplicationJsonAnAppDeploymentWorkers[] workers) {
        this.workers = workers;
        return this;
    }
}