import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * This type defines the fields returned by request to delete a set of ads by inventory reference ID.
**/
export declare class DeleteAdsByInventoryReferenceResponse extends SpeakeasyBase {
    adIds?: string[];
    errors?: ErrorT[];
    inventoryReferenceId?: string;
    inventoryReferenceType?: string;
    statusCode?: number;
}
