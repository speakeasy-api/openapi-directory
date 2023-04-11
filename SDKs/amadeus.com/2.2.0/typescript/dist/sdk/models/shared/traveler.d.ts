import { SpeakeasyBase } from "../../../internal/utils";
import { TravelerTypeEnum } from "./travelertypeenum";
export declare class Traveler extends SpeakeasyBase {
    /**
     * if type="HELD_INFANT", corresponds to the adult travelers's id who will share the seat
     */
    associatedAdultId?: string;
    id: string;
    /**
     * traveler type
     *
     * @remarks
     * age restrictions : CHILD < 12y, HELD_INFANT < 2y, SEATED_INFANT < 2y, SENIOR >=60y
     *
     */
    travelerType: TravelerTypeEnum;
}
