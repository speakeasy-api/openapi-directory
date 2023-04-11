import { SpeakeasyBase } from "../../../internal/utils";
/**
 * <p>Information about the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">external key </a>that is associated with a KMS key in an external key store. </p> <p>This element appears in a <a>CreateKey</a> or <a>DescribeKey</a> response only for a KMS key in an external key store.</p> <p>The <i>external key</i> is a symmetric encryption key that is hosted by an external key manager outside of Amazon Web Services. When you use the KMS key in an external key store in a cryptographic operation, the cryptographic operation is performed in the external key manager using the specified external key. For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/keystore-external.html#concept-external-key">External key</a> in the <i>Key Management Service Developer Guide</i>.</p>
 */
export declare class XksKeyConfigurationType extends SpeakeasyBase {
    id?: string;
}
