import { SpeakeasyBase } from "../../../internal/utils";
import { AdReference } from "./adreference";
/**
 * This type is a container for a list of ad IDs and their associated URIs.
 */
export declare class AdReferences extends SpeakeasyBase {
    /**
     * A list of ad IDs. An ad ID is generated for each successfully created ad. Only one ad can be created per operation.
     */
    ads?: AdReference[];
}
