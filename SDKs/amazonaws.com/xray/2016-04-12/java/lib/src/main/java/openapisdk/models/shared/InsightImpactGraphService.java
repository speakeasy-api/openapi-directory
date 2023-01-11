package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * InsightImpactGraphService
 * Information about an application that processed requests, users that made requests, or downstream services, resources, and applications that an application used. 
**/
public class InsightImpactGraphService {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AccountId")
    public String accountId;
    public InsightImpactGraphService withAccountId(String accountId) {
        this.accountId = accountId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Edges")
    public InsightImpactGraphEdge[] edges;
    public InsightImpactGraphService withEdges(InsightImpactGraphEdge[] edges) {
        this.edges = edges;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public InsightImpactGraphService withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Names")
    public String[] names;
    public InsightImpactGraphService withNames(String[] names) {
        this.names = names;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ReferenceId")
    public Long referenceId;
    public InsightImpactGraphService withReferenceId(Long referenceId) {
        this.referenceId = referenceId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Type")
    public String type;
    public InsightImpactGraphService withType(String type) {
        this.type = type;
        return this;
    }
}