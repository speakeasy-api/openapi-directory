package openapisdk.models.shared;



/**
 * KeyPair
 * Describes a key pair.
**/
public class KeyPair {
    public java.util.Map<String, Object> keyFingerprint;
    public KeyPair withKeyFingerprint(java.util.Map<String, Object> keyFingerprint) {
        this.keyFingerprint = keyFingerprint;
        return this;
    }
    public java.util.Map<String, Object> keyMaterial;
    public KeyPair withKeyMaterial(java.util.Map<String, Object> keyMaterial) {
        this.keyMaterial = keyMaterial;
        return this;
    }
    public java.util.Map<String, Object> keyName;
    public KeyPair withKeyName(java.util.Map<String, Object> keyName) {
        this.keyName = keyName;
        return this;
    }
    public java.util.Map<String, Object> keyPairId;
    public KeyPair withKeyPairId(java.util.Map<String, Object> keyPairId) {
        this.keyPairId = keyPairId;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public KeyPair withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
}