package openapisdk.models.shared;



/**
 * Cipher
 * Information about a cipher used in a policy.
**/
public class Cipher {
    public String name;
    public Cipher withName(String name) {
        this.name = name;
        return this;
    }
    public Long priority;
    public Cipher withPriority(Long priority) {
        this.priority = priority;
        return this;
    }
}