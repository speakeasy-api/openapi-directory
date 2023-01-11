package openapisdk.models.shared;



/**
 * TransportsSupported
 * 'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'
**/
public class TransportsSupported {
    public String[] serializers;
    public TransportsSupported withSerializers(String[] serializers) {
        this.serializers = serializers;
        return this;
    }
    public TransportDescriptor transport;
    public TransportsSupported withTransport(TransportDescriptor transport) {
        this.transport = transport;
        return this;
    }
}