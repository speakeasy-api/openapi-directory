package openapisdk.models.shared;



/**
 * InvalidFileSystemException
 * File system specified in export manifest is invalid.
**/
public class InvalidFileSystemException {
    public String message;
    public InvalidFileSystemException withMessage(String message) {
        this.message = message;
        return this;
    }
}