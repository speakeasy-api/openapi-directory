package openapisdk.models.shared;



public class NodeConfigurationOptionsMessage {
    public String marker;
    public NodeConfigurationOptionsMessage withMarker(String marker) {
        this.marker = marker;
        return this;
    }
    public NodeConfigurationOptionList[] nodeConfigurationOptionList;
    public NodeConfigurationOptionsMessage withNodeConfigurationOptionList(NodeConfigurationOptionList[] nodeConfigurationOptionList) {
        this.nodeConfigurationOptionList = nodeConfigurationOptionList;
        return this;
    }
}