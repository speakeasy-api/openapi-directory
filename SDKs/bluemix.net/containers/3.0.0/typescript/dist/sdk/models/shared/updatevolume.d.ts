import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Input parameter that are required to provision an existing volume to a new space and to unprovision it from a space.
 */
export declare class UpdateVolume extends SpeakeasyBase {
    /**
     * The name or ID of the space where you want to provision your existing volume. Run `cf spaces` to retrieve the name, or `cf space <space_name> --guid` to retrieve the space ID.
     */
    addSpaces?: string[];
    /**
     * The name or ID of the space from which you want to unprovision your existing volume. Run `cf spaces` to retrieve the name, or `cf space <space_name> --guid` to retrieve the space ID.
     */
    removeSpaces?: string[];
}
