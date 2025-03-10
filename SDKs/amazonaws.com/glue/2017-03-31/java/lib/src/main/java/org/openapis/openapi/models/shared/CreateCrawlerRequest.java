/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi.models.shared;

import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;

public class CreateCrawlerRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classifiers")
    public String[] classifiers;

    public CreateCrawlerRequest withClassifiers(String[] classifiers) {
        this.classifiers = classifiers;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configuration")
    public String configuration;

    public CreateCrawlerRequest withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerSecurityConfiguration")
    public String crawlerSecurityConfiguration;

    public CreateCrawlerRequest withCrawlerSecurityConfiguration(String crawlerSecurityConfiguration) {
        this.crawlerSecurityConfiguration = crawlerSecurityConfiguration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;

    public CreateCrawlerRequest withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;

    public CreateCrawlerRequest withDescription(String description) {
        this.description = description;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LakeFormationConfiguration")
    public LakeFormationConfiguration lakeFormationConfiguration;

    public CreateCrawlerRequest withLakeFormationConfiguration(LakeFormationConfiguration lakeFormationConfiguration) {
        this.lakeFormationConfiguration = lakeFormationConfiguration;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineageConfiguration")
    public LineageConfiguration lineageConfiguration;

    public CreateCrawlerRequest withLineageConfiguration(LineageConfiguration lineageConfiguration) {
        this.lineageConfiguration = lineageConfiguration;
        return this;
    }
    
    @JsonProperty("Name")
    public String name;

    public CreateCrawlerRequest withName(String name) {
        this.name = name;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecrawlPolicy")
    public RecrawlPolicy recrawlPolicy;

    public CreateCrawlerRequest withRecrawlPolicy(RecrawlPolicy recrawlPolicy) {
        this.recrawlPolicy = recrawlPolicy;
        return this;
    }
    
    @JsonProperty("Role")
    public String role;

    public CreateCrawlerRequest withRole(String role) {
        this.role = role;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public String schedule;

    public CreateCrawlerRequest withSchedule(String schedule) {
        this.schedule = schedule;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaChangePolicy")
    public SchemaChangePolicy schemaChangePolicy;

    public CreateCrawlerRequest withSchemaChangePolicy(SchemaChangePolicy schemaChangePolicy) {
        this.schemaChangePolicy = schemaChangePolicy;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablePrefix")
    public String tablePrefix;

    public CreateCrawlerRequest withTablePrefix(String tablePrefix) {
        this.tablePrefix = tablePrefix;
        return this;
    }
    
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;

    public CreateCrawlerRequest withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    
    @JsonProperty("Targets")
    public CrawlerTargets targets;

    public CreateCrawlerRequest withTargets(CrawlerTargets targets) {
        this.targets = targets;
        return this;
    }
    
    public CreateCrawlerRequest(@JsonProperty("Name") String name, @JsonProperty("Role") String role, @JsonProperty("Targets") CrawlerTargets targets) {
        this.name = name;
        this.role = role;
        this.targets = targets;
  }
}
