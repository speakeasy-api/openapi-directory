package openapisdk.models.shared;



/**
 * DocumentSuggesterOptions
 * Options for a search suggester.
**/
public class DocumentSuggesterOptions {
    public SuggesterFuzzyMatchingEnum fuzzyMatching;
    public DocumentSuggesterOptions withFuzzyMatching(SuggesterFuzzyMatchingEnum fuzzyMatching) {
        this.fuzzyMatching = fuzzyMatching;
        return this;
    }
    public String sortExpression;
    public DocumentSuggesterOptions withSortExpression(String sortExpression) {
        this.sortExpression = sortExpression;
        return this;
    }
    public String sourceField;
    public DocumentSuggesterOptions withSourceField(String sourceField) {
        this.sourceField = sourceField;
        return this;
    }
}