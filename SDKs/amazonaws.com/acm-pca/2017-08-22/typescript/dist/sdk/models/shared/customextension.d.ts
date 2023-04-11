import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p/> <p>Specifies the X.509 extension information for a certificate.</p> <p>Extensions present in <code>CustomExtensions</code> follow the <code>ApiPassthrough</code> <a href="https://docs.aws.amazon.com/privateca/latest/userguide/UsingTemplates.html#template-order-of-operations">template rules</a>. </p>
 */
export declare class CustomExtension extends SpeakeasyBase {
    critical?: boolean;
    objectIdentifier: string;
    value: string;
}
