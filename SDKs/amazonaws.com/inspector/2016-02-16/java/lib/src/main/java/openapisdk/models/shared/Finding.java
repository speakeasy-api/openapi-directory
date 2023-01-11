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
 * Finding
 * Contains information about an Amazon Inspector finding. This data type is used as the response element in the <a>DescribeFindings</a> action.
**/
public class Finding {
    @JsonProperty("arn")
    public String arn;
    public Finding withArn(String arn) {
        this.arn = arn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetAttributes")
    public AssetAttributes assetAttributes;
    public Finding withAssetAttributes(AssetAttributes assetAttributes) {
        this.assetAttributes = assetAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("assetType")
    public AssetTypeEnum assetType;
    public Finding withAssetType(AssetTypeEnum assetType) {
        this.assetType = assetType;
        return this;
    }
    @JsonProperty("attributes")
    public Attribute[] attributes;
    public Finding withAttributes(Attribute[] attributes) {
        this.attributes = attributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("confidence")
    public Long confidence;
    public Finding withConfidence(Long confidence) {
        this.confidence = confidence;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("createdAt")
    public OffsetDateTime createdAt;
    public Finding withCreatedAt(OffsetDateTime createdAt) {
        this.createdAt = createdAt;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("description")
    public String description;
    public Finding withDescription(String description) {
        this.description = description;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("id")
    public String id;
    public Finding withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("indicatorOfCompromise")
    public Boolean indicatorOfCompromise;
    public Finding withIndicatorOfCompromise(Boolean indicatorOfCompromise) {
        this.indicatorOfCompromise = indicatorOfCompromise;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("numericSeverity")
    public Double numericSeverity;
    public Finding withNumericSeverity(Double numericSeverity) {
        this.numericSeverity = numericSeverity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("recommendation")
    public String recommendation;
    public Finding withRecommendation(String recommendation) {
        this.recommendation = recommendation;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schemaVersion")
    public Long schemaVersion;
    public Finding withSchemaVersion(Long schemaVersion) {
        this.schemaVersion = schemaVersion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("service")
    public String service;
    public Finding withService(String service) {
        this.service = service;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serviceAttributes")
    public InspectorServiceAttributes serviceAttributes;
    public Finding withServiceAttributes(InspectorServiceAttributes serviceAttributes) {
        this.serviceAttributes = serviceAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("severity")
    public SeverityEnum severity;
    public Finding withSeverity(SeverityEnum severity) {
        this.severity = severity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("title")
    public String title;
    public Finding withTitle(String title) {
        this.title = title;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("updatedAt")
    public OffsetDateTime updatedAt;
    public Finding withUpdatedAt(OffsetDateTime updatedAt) {
        this.updatedAt = updatedAt;
        return this;
    }
    @JsonProperty("userAttributes")
    public Attribute[] userAttributes;
    public Finding withUserAttributes(Attribute[] userAttributes) {
        this.userAttributes = userAttributes;
        return this;
    }
}