package openapisdk.models.shared;



/**
 * DescribeAnalysisSchemesResponse
 * The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.
**/
public class DescribeAnalysisSchemesResponse {
    public AnalysisSchemeStatus[] analysisSchemes;
    public DescribeAnalysisSchemesResponse withAnalysisSchemes(AnalysisSchemeStatus[] analysisSchemes) {
        this.analysisSchemes = analysisSchemes;
        return this;
    }
}