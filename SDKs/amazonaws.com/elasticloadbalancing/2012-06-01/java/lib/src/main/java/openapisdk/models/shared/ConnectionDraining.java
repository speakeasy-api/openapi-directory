package openapisdk.models.shared;



/**
 * ConnectionDraining
 * Information about the <code>ConnectionDraining</code> attribute.
**/
public class ConnectionDraining {
    public Boolean enabled;
    public ConnectionDraining withEnabled(Boolean enabled) {
        this.enabled = enabled;
        return this;
    }
    public Long timeout;
    public ConnectionDraining withTimeout(Long timeout) {
        this.timeout = timeout;
        return this;
    }
}