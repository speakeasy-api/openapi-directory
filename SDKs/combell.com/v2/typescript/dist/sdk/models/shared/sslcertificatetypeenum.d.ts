/**
 * The type of the certificate:
 *
 * @remarks
 * <ul><li>Standard: Certificate for a single domain.</li><li>Multi domain: Certificate for multiple (sub)domains belonging to the same owner.</li><li>Wildcard: Certificate for all the subdomains.</li></ul>
 */
export declare enum SslCertificateTypeEnum {
    Standard = "standard",
    MultiDomain = "multi_domain",
    Wildcard = "wildcard"
}
