package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ClientCertAuthSettings
 * Contains information about the client certificate authentication settings for the <code>RegisterCertificate</code> and <code>DescribeCertificate</code> operations. 
**/
public class ClientCertAuthSettings {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("OCSPUrl")
    public String ocspUrl;
    public ClientCertAuthSettings withOcspUrl(String ocspUrl) {
        this.ocspUrl = ocspUrl;
        return this;
    }
}