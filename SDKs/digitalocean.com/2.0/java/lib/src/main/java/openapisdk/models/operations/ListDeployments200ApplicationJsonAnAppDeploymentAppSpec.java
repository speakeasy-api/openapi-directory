package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ListDeployments200ApplicationJsonAnAppDeploymentAppSpec
 * The desired configuration of an application.
**/
public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpec {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("databases")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases[] databases;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withDatabases(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases[] databases) {
        this.databases = databases;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("domains")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains[] domains;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withDomains(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDomains[] domains) {
        this.domains = domains;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("jobs")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs[] jobs;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withJobs(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecJobs[] jobs) {
        this.jobs = jobs;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("region")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum region;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withRegion(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecRegionEnum region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices[] services;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withServices(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecServices[] services) {
        this.services = services;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("static_sites")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites[] staticSites;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withStaticSites(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecStaticSites[] staticSites) {
        this.staticSites = staticSites;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("workers")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers[] workers;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpec withWorkers(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecWorkers[] workers) {
        this.workers = workers;
        return this;
    }
}