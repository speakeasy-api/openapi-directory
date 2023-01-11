package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cluster_name")
    public String clusterName;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withClusterName(String clusterName) {
        this.clusterName = clusterName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db_name")
    public String dbName;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withDbName(String dbName) {
        this.dbName = dbName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("db_user")
    public String dbUser;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withDbUser(String dbUser) {
        this.dbUser = dbUser;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("engine")
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum engine;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withEngine(Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabasesEngineEnum engine) {
        this.engine = engine;
        return this;
    }
    @JsonProperty("name")
    public String name;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("production")
    public Boolean production;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withProduction(Boolean production) {
        this.production = production;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("version")
    public String version;
    public Onev21apps1Percent7BappIdPercent7D1deploymentsGetResponses200ContentApplication1jsonSchemaPropertiesDeploymentsItemsPropertiesSpecDatabases withVersion(String version) {
        this.version = version;
        return this;
    }
}