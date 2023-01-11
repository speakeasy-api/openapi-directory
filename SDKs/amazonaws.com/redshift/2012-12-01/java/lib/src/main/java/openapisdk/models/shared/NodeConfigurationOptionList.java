package openapisdk.models.shared;



/**
 * NodeConfigurationOptionList
 * A list of node configurations.
**/
public class NodeConfigurationOptionList {
    public Double estimatedDiskUtilizationPercent;
    public NodeConfigurationOptionList withEstimatedDiskUtilizationPercent(Double estimatedDiskUtilizationPercent) {
        this.estimatedDiskUtilizationPercent = estimatedDiskUtilizationPercent;
        return this;
    }
    public ModeEnum mode;
    public NodeConfigurationOptionList withMode(ModeEnum mode) {
        this.mode = mode;
        return this;
    }
    public String nodeType;
    public NodeConfigurationOptionList withNodeType(String nodeType) {
        this.nodeType = nodeType;
        return this;
    }
    public Long numberOfNodes;
    public NodeConfigurationOptionList withNumberOfNodes(Long numberOfNodes) {
        this.numberOfNodes = numberOfNodes;
        return this;
    }
}