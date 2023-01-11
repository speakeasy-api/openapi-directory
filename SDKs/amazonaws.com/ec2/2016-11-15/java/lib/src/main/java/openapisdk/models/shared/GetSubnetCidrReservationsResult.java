package openapisdk.models.shared;



public class GetSubnetCidrReservationsResult {
    public java.util.Map<String, Object> nextToken;
    public GetSubnetCidrReservationsResult withNextToken(java.util.Map<String, Object> nextToken) {
        this.nextToken = nextToken;
        return this;
    }
    public java.util.Map<String, Object> subnetIpv4CidrReservations;
    public GetSubnetCidrReservationsResult withSubnetIpv4CidrReservations(java.util.Map<String, Object> subnetIpv4CidrReservations) {
        this.subnetIpv4CidrReservations = subnetIpv4CidrReservations;
        return this;
    }
    public java.util.Map<String, Object> subnetIpv6CidrReservations;
    public GetSubnetCidrReservationsResult withSubnetIpv6CidrReservations(java.util.Map<String, Object> subnetIpv6CidrReservations) {
        this.subnetIpv6CidrReservations = subnetIpv6CidrReservations;
        return this;
    }
}