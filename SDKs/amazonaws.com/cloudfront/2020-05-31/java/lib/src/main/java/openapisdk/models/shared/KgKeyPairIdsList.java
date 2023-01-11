package openapisdk.models.shared;



/**
 * KgKeyPairIdsList
 * A list of identifiers for the public keys that CloudFront can use to verify the signatures of signed URLs and signed cookies.
**/
public class KgKeyPairIdsList {
    public String keyGroupId;
    public KgKeyPairIdsList withKeyGroupId(String keyGroupId) {
        this.keyGroupId = keyGroupId;
        return this;
    }
    public KeyPairIds keyPairIds;
    public KgKeyPairIdsList withKeyPairIds(KeyPairIds keyPairIds) {
        this.keyPairIds = keyPairIds;
        return this;
    }
}