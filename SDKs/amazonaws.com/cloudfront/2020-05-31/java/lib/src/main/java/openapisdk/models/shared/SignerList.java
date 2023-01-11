package openapisdk.models.shared;



/**
 * SignerList
 * A list of accounts and the active CloudFront key pairs in each account that CloudFront can use to verify the signatures of signed URLs and signed cookies.
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