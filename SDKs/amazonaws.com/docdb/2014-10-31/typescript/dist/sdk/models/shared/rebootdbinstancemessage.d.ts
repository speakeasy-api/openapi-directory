import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Represents the input to <a>RebootDBInstance</a>.
 */
export declare class RebootDBInstanceMessage extends SpeakeasyBase {
    dbInstanceIdentifier: string;
    forceFailover?: boolean;
}
