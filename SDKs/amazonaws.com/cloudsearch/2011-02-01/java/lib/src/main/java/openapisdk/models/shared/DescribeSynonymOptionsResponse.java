package openapisdk.models.shared;



/**
 * DescribeSynonymOptionsResponse
 * A response message that contains the synonym options for a search domain.
**/
public class DescribeSynonymOptionsResponse {
    public SynonymOptionsStatus synonyms;
    public DescribeSynonymOptionsResponse withSynonyms(SynonymOptionsStatus synonyms) {
        this.synonyms = synonyms;
        return this;
    }
}