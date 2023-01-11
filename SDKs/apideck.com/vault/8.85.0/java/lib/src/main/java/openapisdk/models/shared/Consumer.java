package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class Consumer {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("aggregated_request_count")
    public Double aggregatedRequestCount;
    public Consumer withAggregatedRequestCount(Double aggregatedRequestCount) {
        this.aggregatedRequestCount = aggregatedRequestCount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("application_id")
    public String applicationId;
    public Consumer withApplicationId(String applicationId) {
        this.applicationId = applicationId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("connections")
    public ConsumerConnection[] connections;
    public Consumer withConnections(ConsumerConnection[] connections) {
        this.connections = connections;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("consumer_id")
    public String consumerId;
    public Consumer withConsumerId(String consumerId) {
        this.consumerId = consumerId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("created")
    public String created;
    public Consumer withCreated(String created) {
        this.created = created;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("metadata")
    public ConsumerMetadata metadata;
    public Consumer withMetadata(ConsumerMetadata metadata) {
        this.metadata = metadata;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("modified")
    public String modified;
    public Consumer withModified(String modified) {
        this.modified = modified;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_count_updated")
    public String requestCountUpdated;
    public Consumer withRequestCountUpdated(String requestCountUpdated) {
        this.requestCountUpdated = requestCountUpdated;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("request_counts")
    public RequestCountAllocation requestCounts;
    public Consumer withRequestCounts(RequestCountAllocation requestCounts) {
        this.requestCounts = requestCounts;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("services")
    public String[] services;
    public Consumer withServices(String[] services) {
        this.services = services;
        return this;
    }
}