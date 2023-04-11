import { SpeakeasyBase } from "../../../internal/utils";
import { AttributesResource } from "./attributesresource";
/**
 * Success
 */
export declare class RemoveAttributesResponse extends SpeakeasyBase {
    /**
     * Provides information about the type and the names of attributes that were removed from all the endpoints that are associated with an application.
     */
    attributesResource: AttributesResource;
}
