package openapisdk.models.shared;



/**
 * DeleteAnalysisSchemeResponse
 * The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.
**/
public class DeleteAnalysisSchemeResponse {
    public AnalysisSchemeStatus analysisScheme;
    public DeleteAnalysisSchemeResponse withAnalysisScheme(AnalysisSchemeStatus analysisScheme) {
        this.analysisScheme = analysisScheme;
        return this;
    }
}