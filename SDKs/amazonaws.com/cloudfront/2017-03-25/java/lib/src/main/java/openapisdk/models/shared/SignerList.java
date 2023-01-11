package openapisdk.models.shared;



/**
 * SignerList
 * A complex type that lists the AWS accounts that were included in the <code>TrustedSigners</code> complex type, as well as their active CloudFront key pair IDs, if any. 
**/
public class SignerList {
    public String awsAccountNumber;
    public SignerList withAwsAccountNumber(String awsAccountNumber) {
        this.awsAccountNumber = awsAccountNumber;
        return this;
    }
    public KeyPairIds keyPairIds;
    public SignerList withKeyPairIds(KeyPairIds keyPairIds) {
        this.keyPairIds = keyPairIds;
        return this;
    }
}