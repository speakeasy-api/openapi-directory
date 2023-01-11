package openapisdk.models.shared;



/**
 * AnalysisOptions
 * Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
**/
public class AnalysisOptions {
    public AlgorithmicStemmingEnum algorithmicStemming;
    public AnalysisOptions withAlgorithmicStemming(AlgorithmicStemmingEnum algorithmicStemming) {
        this.algorithmicStemming = algorithmicStemming;
        return this;
    }
    public String japaneseTokenizationDictionary;
    public AnalysisOptions withJapaneseTokenizationDictionary(String japaneseTokenizationDictionary) {
        this.japaneseTokenizationDictionary = japaneseTokenizationDictionary;
        return this;
    }
    public String stemmingDictionary;
    public AnalysisOptions withStemmingDictionary(String stemmingDictionary) {
        this.stemmingDictionary = stemmingDictionary;
        return this;
    }
    public String stopwords;
    public AnalysisOptions withStopwords(String stopwords) {
        this.stopwords = stopwords;
        return this;
    }
    public String synonyms;
    public AnalysisOptions withSynonyms(String synonyms) {
        this.synonyms = synonyms;
        return this;
    }
}