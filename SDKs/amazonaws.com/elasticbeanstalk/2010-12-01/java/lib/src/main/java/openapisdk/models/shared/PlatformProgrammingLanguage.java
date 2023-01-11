package openapisdk.models.shared;



/**
 * PlatformProgrammingLanguage
 * A programming language supported by the platform.
**/
public class PlatformProgrammingLanguage {
    public String name;
    public PlatformProgrammingLanguage withName(String name) {
        this.name = name;
        return this;
    }
    public String version;
    public PlatformProgrammingLanguage withVersion(String version) {
        this.version = version;
        return this;
    }
}