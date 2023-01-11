package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class DescribeNodeAssociationStatusResponse {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EngineAttributes")
    public EngineAttribute[] engineAttributes;
    public DescribeNodeAssociationStatusResponse withEngineAttributes(EngineAttribute[] engineAttributes) {
        this.engineAttributes = engineAttributes;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NodeAssociationStatus")
    public NodeAssociationStatusEnum nodeAssociationStatus;
    public DescribeNodeAssociationStatusResponse withNodeAssociationStatus(NodeAssociationStatusEnum nodeAssociationStatus) {
        this.nodeAssociationStatus = nodeAssociationStatus;
        return this;
    }
}