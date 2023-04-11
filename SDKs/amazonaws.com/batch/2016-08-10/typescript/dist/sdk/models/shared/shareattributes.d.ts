import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Specifies the weights for the fair share identifiers for the fair share policy. Fair share identifiers that aren't included have a default weight of <code>1.0</code>.
 */
export declare class ShareAttributes extends SpeakeasyBase {
    shareIdentifier: string;
    weightFactor?: number;
}
