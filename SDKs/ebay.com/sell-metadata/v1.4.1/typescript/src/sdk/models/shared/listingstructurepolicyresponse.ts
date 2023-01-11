import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ListingStructurePolicy } from "./listingstructurepolicy";
import { ErrorT } from "./error";



export class ListingStructurePolicyResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=listingStructurePolicies", elemType: ListingStructurePolicy })
  listingStructurePolicies?: ListingStructurePolicy[];

  @SpeakeasyMetadata({ data: "json, name=warnings", elemType: ErrorT })
  warnings?: ErrorT[];
}
