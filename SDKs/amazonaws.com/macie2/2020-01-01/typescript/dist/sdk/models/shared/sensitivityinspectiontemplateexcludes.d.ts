import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies managed data identifiers to exclude (not use) when performing automated sensitive data discovery for an Amazon Macie account. For information about the managed data identifiers that Amazon Macie currently provides, see <a href="https://docs.aws.amazon.com/macie/latest/user/managed-data-identifiers.html">Using managed data identifiers</a> in the <i>Amazon Macie User Guide</i>.
 */
export declare class SensitivityInspectionTemplateExcludes extends SpeakeasyBase {
    managedDataIdentifierIds?: string[];
}
