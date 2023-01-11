package openapisdk.models.shared;



/**
 * UpdateSynonymOptionsResponse
 * A response message that contains the status of updated synonym options.
**/
public class UpdateSynonymOptionsResponse {
    public SynonymOptionsStatus synonyms;
    public UpdateSynonymOptionsResponse withSynonyms(SynonymOptionsStatus synonyms) {
        this.synonyms = synonyms;
        return this;
    }
}