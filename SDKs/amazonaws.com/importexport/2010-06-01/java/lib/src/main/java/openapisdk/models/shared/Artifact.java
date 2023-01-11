package openapisdk.models.shared;



/**
 * Artifact
 * A discrete item that contains the description and URL of an artifact (such as a PDF).
**/
public class Artifact {
    public String description;
    public Artifact withDescription(String description) {
        this.description = description;
        return this;
    }
    public String url;
    public Artifact withUrl(String url) {
        this.url = url;
        return this;
    }
}