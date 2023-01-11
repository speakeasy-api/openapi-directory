package openapisdk.models.shared;



/**
 * AnalysisScheme
 * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.
**/
public class AnalysisScheme {
    public AnalysisOptions analysisOptions;
    public AnalysisScheme withAnalysisOptions(AnalysisOptions analysisOptions) {
        this.analysisOptions = analysisOptions;
        return this;
    }
    public AnalysisSchemeLanguageEnum analysisSchemeLanguage;
    public AnalysisScheme withAnalysisSchemeLanguage(AnalysisSchemeLanguageEnum analysisSchemeLanguage) {
        this.analysisSchemeLanguage = analysisSchemeLanguage;
        return this;
    }
    public String analysisSchemeName;
    public AnalysisScheme withAnalysisSchemeName(String analysisSchemeName) {
        this.analysisSchemeName = analysisSchemeName;
        return this;
    }
}