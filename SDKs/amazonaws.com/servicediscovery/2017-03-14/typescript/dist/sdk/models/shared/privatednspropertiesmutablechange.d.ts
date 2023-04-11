import { SpeakeasyBase } from "../../../internal/utils";
import { SOAChange } from "./soachange";
/**
 * Updated DNS properties for the private DNS namespace.
 */
export declare class PrivateDnsPropertiesMutableChange extends SpeakeasyBase {
    soa: SOAChange;
}
