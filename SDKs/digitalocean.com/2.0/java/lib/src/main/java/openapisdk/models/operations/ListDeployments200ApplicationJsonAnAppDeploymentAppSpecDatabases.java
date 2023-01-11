package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_name")
    public String clusterName;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db_name")
    public String dbName;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db_user")
    public String dbUser;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum engine;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withEngine(ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabasesEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production")
    public Boolean production;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withProduction(Boolean production) {
        this.production = production;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public ListDeployments200ApplicationJsonAnAppDeploymentAppSpecDatabases withVersion(String version) {
        this.version = version;
        return this;
    }
}