import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the allow lists, custom data identifiers, and managed data identifiers to include (use) when performing automated sensitive data discovery for an Amazon Macie account. The configuration must specify at least one custom data identifier or managed data identifier. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
 */
export declare class SensitivityInspectionTemplateIncludes extends SpeakeasyBase {
    allowListIds?: string[];
    customDataIdentifierIds?: string[];
    managedDataIdentifierIds?: string[];
}
