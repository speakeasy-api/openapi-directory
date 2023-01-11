package openapisdk.models.shared;



/**
 * PlatformFramework
 * A framework supported by the platform.
**/
public class PlatformFramework {
    public String name;
    public PlatformFramework withName(String name) {
        this.name = name;
        return this;
    }
    public String version;
    public PlatformFramework withVersion(String version) {
        this.version = version;
        return this;
    }
}