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
 * RepositoryAssociationSummary
 * Summary information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_ListRepositoryAssociations.html"> <code>ListRepositoryAssociations</code> </a> operation returns a list of <code>RepositoryAssociationSummary</code> objects.
**/
public class RepositoryAssociationSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationArn")
    public String associationArn;
    public RepositoryAssociationSummary withAssociationArn(String associationArn) {
        this.associationArn = associationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationId")
    public String associationId;
    public RepositoryAssociationSummary withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public RepositoryAssociationSummary withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTimeStamp")
    public OffsetDateTime lastUpdatedTimeStamp;
    public RepositoryAssociationSummary withLastUpdatedTimeStamp(OffsetDateTime lastUpdatedTimeStamp) {
        this.lastUpdatedTimeStamp = lastUpdatedTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RepositoryAssociationSummary withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public RepositoryAssociationSummary withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderType")
    public ProviderTypeEnum providerType;
    public RepositoryAssociationSummary withProviderType(ProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public RepositoryAssociationStateEnum state;
    public RepositoryAssociationSummary withState(RepositoryAssociationStateEnum state) {
        this.state = state;
        return this;
    }
}