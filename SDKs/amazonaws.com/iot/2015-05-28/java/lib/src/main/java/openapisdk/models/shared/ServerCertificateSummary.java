package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ServerCertificateSummary
 * An object that contains information about a server certificate.
**/
public class ServerCertificateSummary {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificateArn")
    public String serverCertificateArn;
    public ServerCertificateSummary withServerCertificateArn(String serverCertificateArn) {
        this.serverCertificateArn = serverCertificateArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificateStatus")
    public ServerCertificateStatusEnum serverCertificateStatus;
    public ServerCertificateSummary withServerCertificateStatus(ServerCertificateStatusEnum serverCertificateStatus) {
        this.serverCertificateStatus = serverCertificateStatus;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("serverCertificateStatusDetail")
    public String serverCertificateStatusDetail;
    public ServerCertificateSummary withServerCertificateStatusDetail(String serverCertificateStatusDetail) {
        this.serverCertificateStatusDetail = serverCertificateStatusDetail;
        return this;
    }
}