package openapisdk.models.shared;



/**
 * CheckDnsAvailabilityResultMessage
 * Indicates if the specified CNAME is available.
**/
public class CheckDnsAvailabilityResultMessage {
    public Boolean available;
    public CheckDnsAvailabilityResultMessage withAvailable(Boolean available) {
        this.available = available;
        return this;
    }
    public String fullyQualifiedCNAME;
    public CheckDnsAvailabilityResultMessage withFullyQualifiedCname(String fullyQualifiedCNAME) {
        this.fullyQualifiedCNAME = fullyQualifiedCNAME;
        return this;
    }
}