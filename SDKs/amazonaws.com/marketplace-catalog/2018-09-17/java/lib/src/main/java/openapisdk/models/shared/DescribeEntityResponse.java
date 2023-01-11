package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeEntityResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Details")
    public String details;
    public DescribeEntityResponse withDetails(String details) {
        this.details = details;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityArn")
    public String entityArn;
    public DescribeEntityResponse withEntityArn(String entityArn) {
        this.entityArn = entityArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityIdentifier")
    public String entityIdentifier;
    public DescribeEntityResponse withEntityIdentifier(String entityIdentifier) {
        this.entityIdentifier = entityIdentifier;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EntityType")
    public String entityType;
    public DescribeEntityResponse withEntityType(String entityType) {
        this.entityType = entityType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LastModifiedDate")
    public String lastModifiedDate;
    public DescribeEntityResponse withLastModifiedDate(String lastModifiedDate) {
        this.lastModifiedDate = lastModifiedDate;
        return this;
    }
}