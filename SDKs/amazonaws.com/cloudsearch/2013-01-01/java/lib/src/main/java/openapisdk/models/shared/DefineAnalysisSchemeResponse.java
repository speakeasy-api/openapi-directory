package openapisdk.models.shared;



/**
 * DefineAnalysisSchemeResponse
 * The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.
**/
public class DefineAnalysisSchemeResponse {
    public AnalysisSchemeStatus analysisScheme;
    public DefineAnalysisSchemeResponse withAnalysisScheme(AnalysisSchemeStatus analysisScheme) {
        this.analysisScheme = analysisScheme;
        return this;
    }
}