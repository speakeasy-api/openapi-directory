import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A discrete item that contains the description and URL of an artifact (such as a PDF).
 */
export declare class Artifact extends SpeakeasyBase {
    /**
     * The associated description for this object.
     */
    description?: string;
    /**
     * The URL for a given Artifact.
     */
    url?: string;
}
