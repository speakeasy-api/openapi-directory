package openapisdk.models.shared;



/**
 * AddHeaderAction
 * <p>When included in a receipt rule, this action adds a header to the received email.</p> <p>For information about adding a header using a receipt rule, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-add-header.html">Amazon SES Developer Guide</a>.</p>
**/
public class AddHeaderAction {
    public String headerName;
    public AddHeaderAction withHeaderName(String headerName) {
        this.headerName = headerName;
        return this;
    }
    public String headerValue;
    public AddHeaderAction withHeaderValue(String headerValue) {
        this.headerValue = headerValue;
        return this;
    }
}