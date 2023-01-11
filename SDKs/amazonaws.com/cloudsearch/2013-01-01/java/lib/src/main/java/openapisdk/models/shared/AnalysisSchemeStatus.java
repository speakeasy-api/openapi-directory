package openapisdk.models.shared;



/**
 * AnalysisSchemeStatus
 * The status and configuration of an <code>AnalysisScheme</code>.
**/
public class AnalysisSchemeStatus {
    public AnalysisScheme options;
    public AnalysisSchemeStatus withOptions(AnalysisScheme options) {
        this.options = options;
        return this;
    }
    public OptionStatus status;
    public AnalysisSchemeStatus withStatus(OptionStatus status) {
        this.status = status;
        return this;
    }
}