package openapisdk.models.shared;



/**
 * SynonymOptionsStatus
 * The synonym options configured for this search domain and the current status of those options.
**/
public class SynonymOptionsStatus {
    public String options;
    public SynonymOptionsStatus withOptions(String options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public SynonymOptionsStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}