import { SpeakeasyBase } from "../../../internal/utils";
import { ListingStructurePolicy } from "./listingstructurepolicy";
import { ErrorT } from "./error";
export declare class ListingStructurePolicyResponse extends SpeakeasyBase {
    listingStructurePolicies?: ListingStructurePolicy[];
    warnings?: ErrorT[];
}
