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
 * AggregationAuthorization
 * An object that represents the authorizations granted to aggregator accounts and regions.
**/
public class AggregationAuthorization {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AggregationAuthorizationArn")
    public String aggregationAuthorizationArn;
    public AggregationAuthorization withAggregationAuthorizationArn(String aggregationAuthorizationArn) {
        this.aggregationAuthorizationArn = aggregationAuthorizationArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizedAccountId")
    public String authorizedAccountId;
    public AggregationAuthorization withAuthorizedAccountId(String authorizedAccountId) {
        this.authorizedAccountId = authorizedAccountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AuthorizedAwsRegion")
    public String authorizedAwsRegion;
    public AggregationAuthorization withAuthorizedAwsRegion(String authorizedAwsRegion) {
        this.authorizedAwsRegion = authorizedAwsRegion;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonSerialize(contentUsing = DateTimeSerializer.class)
    @JsonDeserialize(contentUsing = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public AggregationAuthorization withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
}