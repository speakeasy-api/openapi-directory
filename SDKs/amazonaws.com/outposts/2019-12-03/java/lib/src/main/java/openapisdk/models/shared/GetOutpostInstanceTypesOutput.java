package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class GetOutpostInstanceTypesOutput {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceTypes")
    public InstanceTypeItem[] instanceTypes;
    public GetOutpostInstanceTypesOutput withInstanceTypes(InstanceTypeItem[] instanceTypes) {
        this.instanceTypes = instanceTypes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NextToken")
    public String nextToken;
    public GetOutpostInstanceTypesOutput withNextToken(String nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutpostArn")
    public String outpostArn;
    public GetOutpostInstanceTypesOutput withOutpostArn(String outpostArn) {
        this.outpostArn = outpostArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OutpostId")
    public String outpostId;
    public GetOutpostInstanceTypesOutput withOutpostId(String outpostId) {
        this.outpostId = outpostId;
        return this;
    }
}