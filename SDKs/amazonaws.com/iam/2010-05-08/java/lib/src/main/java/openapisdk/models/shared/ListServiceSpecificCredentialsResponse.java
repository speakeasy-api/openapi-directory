package openapisdk.models.shared;



public class ListServiceSpecificCredentialsResponse {
    public ServiceSpecificCredentialMetadata[] serviceSpecificCredentials;
    public ListServiceSpecificCredentialsResponse withServiceSpecificCredentials(ServiceSpecificCredentialMetadata[] serviceSpecificCredentials) {
        this.serviceSpecificCredentials = serviceSpecificCredentials;
        return this;
    }
}