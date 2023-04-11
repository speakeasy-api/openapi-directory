import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The results of an Equipping operation performed through the Destiny API.
 */
export declare class DestinyDestinyEquipItemResult extends SpeakeasyBase {
    /**
     * A PlatformErrorCodes enum indicating whether it succeeded, and if it failed why.
     */
    equipStatus?: number;
    /**
     * The instance ID of the item in question (all items that can be equipped must, but definition, be Instanced and thus have an Instance ID that you can use to refer to them)
     */
    itemInstanceId?: number;
}
