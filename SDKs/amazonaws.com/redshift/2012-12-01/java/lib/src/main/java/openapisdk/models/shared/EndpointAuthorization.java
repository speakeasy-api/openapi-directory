package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * EndpointAuthorization
 * Describes an endpoint authorization for authorizing Redshift-managed VPC endpoint access to a cluster across Amazon Web Services accounts.
**/
public class EndpointAuthorization {
    public Boolean allowedAllVPCs;
    public EndpointAuthorization withAllowedAllVpCs(Boolean allowedAllVPCs) {
        this.allowedAllVPCs = allowedAllVPCs;
        return this;
    }
    public java.util.Map<String, Object>[] allowedVPCs;
    public EndpointAuthorization withAllowedVpCs(java.util.Map<String, Object>[] allowedVPCs) {
        this.allowedVPCs = allowedVPCs;
        return this;
    }
    public OffsetDateTime authorizeTime;
    public EndpointAuthorization withAuthorizeTime(OffsetDateTime authorizeTime) {
        this.authorizeTime = authorizeTime;
        return this;
    }
    public String clusterIdentifier;
    public EndpointAuthorization withClusterIdentifier(String clusterIdentifier) {
        this.clusterIdentifier = clusterIdentifier;
        return this;
    }
    public String clusterStatus;
    public EndpointAuthorization withClusterStatus(String clusterStatus) {
        this.clusterStatus = clusterStatus;
        return this;
    }
    public Long endpointCount;
    public EndpointAuthorization withEndpointCount(Long endpointCount) {
        this.endpointCount = endpointCount;
        return this;
    }
    public String grantee;
    public EndpointAuthorization withGrantee(String grantee) {
        this.grantee = grantee;
        return this;
    }
    public String grantor;
    public EndpointAuthorization withGrantor(String grantor) {
        this.grantor = grantor;
        return this;
    }
    public AuthorizationStatusEnum status;
    public EndpointAuthorization withStatus(AuthorizationStatusEnum status) {
        this.status = status;
        return this;
    }
}