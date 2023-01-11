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
 * Crawler
 * Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the Glue Data Catalog.
**/
public class Crawler {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Classifiers")
    public String[] classifiers;
    public Crawler withClassifiers(String[] classifiers) {
        this.classifiers = classifiers;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Configuration")
    public String configuration;
    public Crawler withConfiguration(String configuration) {
        this.configuration = configuration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlElapsedTime")
    public Long crawlElapsedTime;
    public Crawler withCrawlElapsedTime(Long crawlElapsedTime) {
        this.crawlElapsedTime = crawlElapsedTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CrawlerSecurityConfiguration")
    public String crawlerSecurityConfiguration;
    public Crawler withCrawlerSecurityConfiguration(String crawlerSecurityConfiguration) {
        this.crawlerSecurityConfiguration = crawlerSecurityConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public Crawler withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DatabaseName")
    public String databaseName;
    public Crawler withDatabaseName(String databaseName) {
        this.databaseName = databaseName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Description")
    public String description;
    public Crawler withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastCrawl")
    public LastCrawlInfo lastCrawl;
    public Crawler withLastCrawl(LastCrawlInfo lastCrawl) {
        this.lastCrawl = lastCrawl;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdated")
    public OffsetDateTime lastUpdated;
    public Crawler withLastUpdated(OffsetDateTime lastUpdated) {
        this.lastUpdated = lastUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LineageConfiguration")
    public LineageConfiguration lineageConfiguration;
    public Crawler withLineageConfiguration(LineageConfiguration lineageConfiguration) {
        this.lineageConfiguration = lineageConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public Crawler withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RecrawlPolicy")
    public RecrawlPolicy recrawlPolicy;
    public Crawler withRecrawlPolicy(RecrawlPolicy recrawlPolicy) {
        this.recrawlPolicy = recrawlPolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Role")
    public String role;
    public Crawler withRole(String role) {
        this.role = role;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Schedule")
    public Schedule schedule;
    public Crawler withSchedule(Schedule schedule) {
        this.schedule = schedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SchemaChangePolicy")
    public SchemaChangePolicy schemaChangePolicy;
    public Crawler withSchemaChangePolicy(SchemaChangePolicy schemaChangePolicy) {
        this.schemaChangePolicy = schemaChangePolicy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public CrawlerStateEnum state;
    public Crawler withState(CrawlerStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TablePrefix")
    public String tablePrefix;
    public Crawler withTablePrefix(String tablePrefix) {
        this.tablePrefix = tablePrefix;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Targets")
    public CrawlerTargets targets;
    public Crawler withTargets(CrawlerTargets targets) {
        this.targets = targets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Version")
    public Long version;
    public Crawler withVersion(Long version) {
        this.version = version;
        return this;
    }
}