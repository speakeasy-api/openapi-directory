package openapisdk.models.shared;



/**
 * InvalidRelativePath
 * The relative path is too big, is not URL-encoded, or does not begin with a slash (/).
**/
public class InvalidRelativePath {
    public String message;
    public InvalidRelativePath withMessage(String message) {
        this.message = message;
        return this;
    }
}