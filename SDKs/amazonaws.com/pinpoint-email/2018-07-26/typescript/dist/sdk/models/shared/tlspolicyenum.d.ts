/**
 * Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is <code>Require</code>, messages are only delivered if a TLS connection can be established. If the value is <code>Optional</code>, messages can be delivered in plain text if a TLS connection can't be established.
 */
export declare enum TlsPolicyEnum {
    Require = "REQUIRE",
    Optional = "OPTIONAL"
}
