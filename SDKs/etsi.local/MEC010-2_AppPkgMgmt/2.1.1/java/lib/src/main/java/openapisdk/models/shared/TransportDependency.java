package openapisdk.models.shared;



public class TransportDependency {
    public String[] labels;
    public TransportDependency withLabels(String[] labels) {
        this.labels = labels;
        return this;
    }
    public String[] serializers;
    public TransportDependency withSerializers(String[] serializers) {
        this.serializers = serializers;
        return this;
    }
    public TransportDescriptor transport;
    public TransportDependency withTransport(TransportDescriptor transport) {
        this.transport = transport;
        return this;
    }
}