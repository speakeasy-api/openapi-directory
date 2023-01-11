package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * Resource
 * A resource related to a finding.
**/
public class Resource {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DataClassification")
    public DataClassificationDetails dataClassification;
    public Resource withDataClassification(DataClassificationDetails dataClassification) {
        this.dataClassification = dataClassification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Details")
    public ResourceDetails details;
    public Resource withDetails(ResourceDetails details) {
        this.details = details;
        return this;
    }
    @JsonProperty("Id")
    public String id;
    public Resource withId(String id) {
        this.id = id;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Partition")
    public PartitionEnum partition;
    public Resource withPartition(PartitionEnum partition) {
        this.partition = partition;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Region")
    public String region;
    public Resource withRegion(String region) {
        this.region = region;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ResourceRole")
    public String resourceRole;
    public Resource withResourceRole(String resourceRole) {
        this.resourceRole = resourceRole;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Tags")
    public java.util.Map<String, String> tags;
    public Resource withTags(java.util.Map<String, String> tags) {
        this.tags = tags;
        return this;
    }
    @JsonProperty("Type")
    public String type;
    public Resource withType(String type) {
        this.type = type;
        return this;
    }
}