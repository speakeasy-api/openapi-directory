package openapisdk.models.shared;



/**
 * ConnectionSettings
 * Information about the <code>ConnectionSettings</code> attribute.
**/
public class ConnectionSettings {
    public Long idleTimeout;
    public ConnectionSettings withIdleTimeout(Long idleTimeout) {
        this.idleTimeout = idleTimeout;
        return this;
    }
}