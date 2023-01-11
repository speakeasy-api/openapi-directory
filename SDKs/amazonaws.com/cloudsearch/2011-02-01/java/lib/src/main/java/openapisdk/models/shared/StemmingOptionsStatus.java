package openapisdk.models.shared;



/**
 * StemmingOptionsStatus
 * The stemming options configured for this search domain and the current status of those options.
**/
public class StemmingOptionsStatus {
    public String options;
    public StemmingOptionsStatus withOptions(String options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public StemmingOptionsStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}