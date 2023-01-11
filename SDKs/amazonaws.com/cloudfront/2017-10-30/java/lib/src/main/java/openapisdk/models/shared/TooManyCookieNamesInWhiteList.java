package openapisdk.models.shared;



/**
 * TooManyCookieNamesInWhiteList
 * Your request contains more cookie names in the whitelist than are allowed per cache behavior.
**/
public class TooManyCookieNamesInWhiteList {
    public String message;
    public TooManyCookieNamesInWhiteList withMessage(String message) {
        this.message = message;
        return this;
    }
}