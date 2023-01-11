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
 * RepositoryAssociation
 * Information about a repository association. The <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_DescribeRepositoryAssociation.html"> <code>DescribeRepositoryAssociation</code> </a> operation returns a <code>RepositoryAssociation</code> object.
**/
public class RepositoryAssociation {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationArn")
    public String associationArn;
    public RepositoryAssociation withAssociationArn(String associationArn) {
        this.associationArn = associationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociationId")
    public String associationId;
    public RepositoryAssociation withAssociationId(String associationId) {
        this.associationId = associationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ConnectionArn")
    public String connectionArn;
    public RepositoryAssociation withConnectionArn(String connectionArn) {
        this.connectionArn = connectionArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreatedTimeStamp")
    public OffsetDateTime createdTimeStamp;
    public RepositoryAssociation withCreatedTimeStamp(OffsetDateTime createdTimeStamp) {
        this.createdTimeStamp = createdTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KMSKeyDetails")
    public KmsKeyDetails kmsKeyDetails;
    public RepositoryAssociation withKmsKeyDetails(KmsKeyDetails kmsKeyDetails) {
        this.kmsKeyDetails = kmsKeyDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("LastUpdatedTimeStamp")
    public OffsetDateTime lastUpdatedTimeStamp;
    public RepositoryAssociation withLastUpdatedTimeStamp(OffsetDateTime lastUpdatedTimeStamp) {
        this.lastUpdatedTimeStamp = lastUpdatedTimeStamp;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public RepositoryAssociation withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Owner")
    public String owner;
    public RepositoryAssociation withOwner(String owner) {
        this.owner = owner;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ProviderType")
    public ProviderTypeEnum providerType;
    public RepositoryAssociation withProviderType(ProviderTypeEnum providerType) {
        this.providerType = providerType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("S3RepositoryDetails")
    public S3RepositoryDetails s3RepositoryDetails;
    public RepositoryAssociation withS3RepositoryDetails(S3RepositoryDetails s3RepositoryDetails) {
        this.s3RepositoryDetails = s3RepositoryDetails;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("State")
    public RepositoryAssociationStateEnum state;
    public RepositoryAssociation withState(RepositoryAssociationStateEnum state) {
        this.state = state;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StateReason")
    public String stateReason;
    public RepositoryAssociation withStateReason(String stateReason) {
        this.stateReason = stateReason;
        return this;
    }
}