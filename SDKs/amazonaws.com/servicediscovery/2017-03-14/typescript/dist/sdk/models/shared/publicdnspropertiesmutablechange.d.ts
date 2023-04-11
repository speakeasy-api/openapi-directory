import { SpeakeasyBase } from "../../../internal/utils";
import { SOAChange } from "./soachange";
/**
 * Updated DNS properties for the public DNS namespace.
 */
export declare class PublicDnsPropertiesMutableChange extends SpeakeasyBase {
    soa: SOAChange;
}
