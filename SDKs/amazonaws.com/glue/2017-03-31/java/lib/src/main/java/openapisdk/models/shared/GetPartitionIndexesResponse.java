package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetPartitionIndexesResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetPartitionIndexesResponse withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PartitionIndexDescriptorList")
    public PartitionIndexDescriptor[] partitionIndexDescriptorList;
    public GetPartitionIndexesResponse withPartitionIndexDescriptorList(PartitionIndexDescriptor[] partitionIndexDescriptorList) {
        this.partitionIndexDescriptorList = partitionIndexDescriptorList;
        return this;
    }
}