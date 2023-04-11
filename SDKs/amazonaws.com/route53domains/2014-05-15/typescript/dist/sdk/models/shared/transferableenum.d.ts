/**
 * <p>Whether the domain name can be transferred to Route 53.</p> <note> <p>You can transfer only domains that have a value of <code>TRANSFERABLE</code> or <code>Transferable</code>.</p> </note> <p>Valid values:</p> <dl> <dt>TRANSFERABLE</dt> <dd> <p>The domain name can be transferred to Route 53.</p> </dd> <dt>UNTRANSFERRABLE</dt> <dd> <p>The domain name can't be transferred to Route 53.</p> </dd> <dt>DONT_KNOW</dt> <dd> <p>Reserved for future use.</p> </dd> <dt>DOMAIN_IN_OWN_ACCOUNT</dt> <dd> <p>The domain already exists in the current Amazon Web Services account.</p> </dd> <dt>DOMAIN_IN_ANOTHER_ACCOUNT</dt> <dd> <p> the domain exists in another Amazon Web Services account.</p> </dd> <dt>PREMIUM_DOMAIN</dt> <dd> <p>Premium domain transfer is not supported.</p> </dd> </dl>
 */
export declare enum TransferableEnum {
    Transferable = "TRANSFERABLE",
    Untransferable = "UNTRANSFERABLE",
    DontKnow = "DONT_KNOW",
    DomainInOwnAccount = "DOMAIN_IN_OWN_ACCOUNT",
    DomainInAnotherAccount = "DOMAIN_IN_ANOTHER_ACCOUNT",
    PremiumDomain = "PREMIUM_DOMAIN"
}
