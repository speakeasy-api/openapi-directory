import { SpeakeasyBase } from "../../../internal/utils";
import { ResourceIdentifier } from "./resourceidentifier";
/**
 *  Filters out specific findings of a Device Defender audit.
 */
export declare class AuditSuppression extends SpeakeasyBase {
    /**
     * An audit check name. Checks must be enabled for your account. (Use <code>DescribeAccountAuditConfiguration</code> to see the list of all checks, including those that are enabled or use <code>UpdateAccountAuditConfiguration</code> to select which checks are enabled.)
     */
    checkName: string;
    description?: string;
    expirationDate?: Date;
    /**
     * Information that identifies the noncompliant resource.
     */
    resourceIdentifier: ResourceIdentifier;
    suppressIndefinitely?: boolean;
}
