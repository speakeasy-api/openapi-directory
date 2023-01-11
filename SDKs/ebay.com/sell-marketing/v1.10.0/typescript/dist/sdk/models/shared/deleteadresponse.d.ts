import { SpeakeasyBase } from "../../../internal/utils";
import { ErrorT } from "./error";
/**
 * This type defines the fields returned in a delete-ad response.
**/
export declare class DeleteAdResponse extends SpeakeasyBase {
    adId?: string;
    errors?: ErrorT[];
    listingId?: string;
    statusCode?: number;
}
