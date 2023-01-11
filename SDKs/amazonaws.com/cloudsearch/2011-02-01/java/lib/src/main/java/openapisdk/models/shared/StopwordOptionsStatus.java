package openapisdk.models.shared;



/**
 * StopwordOptionsStatus
 * The stopword options configured for this search domain and the current status of those options.
**/
public class StopwordOptionsStatus {
    public String options;
    public StopwordOptionsStatus withOptions(String options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public StopwordOptionsStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}