package openapisdk.models.shared;



/**
 * AvailabilityOptionsStatus
 * The status and configuration of the domain's availability options.
**/
public class AvailabilityOptionsStatus {
    public Boolean options;
    public AvailabilityOptionsStatus withOptions(Boolean options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public AvailabilityOptionsStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}