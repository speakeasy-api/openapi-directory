package openapisdk.models.shared;



/**
 * ListenerDescription
 * The policies enabled for a listener.
**/
public class ListenerDescription {
    public Listener listener;
    public ListenerDescription withListener(Listener listener) {
        this.listener = listener;
        return this;
    }
    public String[] policyNames;
    public ListenerDescription withPolicyNames(String[] policyNames) {
        this.policyNames = policyNames;
        return this;
    }
}