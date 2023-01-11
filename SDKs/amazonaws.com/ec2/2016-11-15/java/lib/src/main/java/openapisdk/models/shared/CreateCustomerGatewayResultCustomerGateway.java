package openapisdk.models.shared;



/**
 * CreateCustomerGatewayResultCustomerGateway
 * Information about the customer gateway.
**/
public class CreateCustomerGatewayResultCustomerGateway {
    public java.util.Map<String, Object> bgpAsn;
    public CreateCustomerGatewayResultCustomerGateway withBgpAsn(java.util.Map<String, Object> bgpAsn) {
        this.bgpAsn = bgpAsn;
        return this;
    }
    public java.util.Map<String, Object> certificateArn;
    public CreateCustomerGatewayResultCustomerGateway withCertificateArn(java.util.Map<String, Object> certificateArn) {
        this.certificateArn = certificateArn;
        return this;
    }
    public java.util.Map<String, Object> customerGatewayId;
    public CreateCustomerGatewayResultCustomerGateway withCustomerGatewayId(java.util.Map<String, Object> customerGatewayId) {
        this.customerGatewayId = customerGatewayId;
        return this;
    }
    public java.util.Map<String, Object> deviceName;
    public CreateCustomerGatewayResultCustomerGateway withDeviceName(java.util.Map<String, Object> deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    public java.util.Map<String, Object> ipAddress;
    public CreateCustomerGatewayResultCustomerGateway withIpAddress(java.util.Map<String, Object> ipAddress) {
        this.ipAddress = ipAddress;
        return this;
    }
    public java.util.Map<String, Object> state;
    public CreateCustomerGatewayResultCustomerGateway withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public CreateCustomerGatewayResultCustomerGateway withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> type;
    public CreateCustomerGatewayResultCustomerGateway withType(java.util.Map<String, Object> type) {
        this.type = type;
        return this;
    }
}