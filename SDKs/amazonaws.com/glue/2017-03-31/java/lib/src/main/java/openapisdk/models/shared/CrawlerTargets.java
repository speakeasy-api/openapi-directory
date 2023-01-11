package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * CrawlerTargets
 * Specifies data stores to crawl.
**/
public class CrawlerTargets {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CatalogTargets")
    public CatalogTarget[] catalogTargets;
    public CrawlerTargets withCatalogTargets(CatalogTarget[] catalogTargets) {
        this.catalogTargets = catalogTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DynamoDBTargets")
    public DynamoDbTarget[] dynamoDBTargets;
    public CrawlerTargets withDynamoDbTargets(DynamoDbTarget[] dynamoDBTargets) {
        this.dynamoDBTargets = dynamoDBTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("JdbcTargets")
    public JdbcTarget[] jdbcTargets;
    public CrawlerTargets withJdbcTargets(JdbcTarget[] jdbcTargets) {
        this.jdbcTargets = jdbcTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MongoDBTargets")
    public MongoDbTarget[] mongoDBTargets;
    public CrawlerTargets withMongoDbTargets(MongoDbTarget[] mongoDBTargets) {
        this.mongoDBTargets = mongoDBTargets;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3Targets")
    public S3Target[] s3Targets;
    public CrawlerTargets withS3Targets(S3Target[] s3Targets) {
        this.s3Targets = s3Targets;
        return this;
    }
}