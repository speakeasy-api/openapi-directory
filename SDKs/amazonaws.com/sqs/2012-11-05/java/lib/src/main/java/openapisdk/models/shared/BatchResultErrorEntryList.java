package openapisdk.models.shared;



/**
 * BatchResultErrorEntryList
 * Gives a detailed description of the result of an action on each entry in the request.
**/
public class BatchResultErrorEntryList {
    public String code;
    public BatchResultErrorEntryList withCode(String code) {
        this.code = code;
        return this;
    }
    public String id;
    public BatchResultErrorEntryList withId(String id) {
        this.id = id;
        return this;
    }
    public String message;
    public BatchResultErrorEntryList withMessage(String message) {
        this.message = message;
        return this;
    }
    public Boolean senderFault;
    public BatchResultErrorEntryList withSenderFault(Boolean senderFault) {
        this.senderFault = senderFault;
        return this;
    }
}