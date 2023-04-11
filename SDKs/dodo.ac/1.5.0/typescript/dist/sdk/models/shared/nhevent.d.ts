import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The type of event. "Event" is a festivity the player can take part in. "Nook Shopping" refers to the [seasonal events](https://nookipedia.com/wiki/Nook_Shopping_seasonal_event) in which exclusive item(s) are available via []Nook Shopping](https://nookipedia.com/wiki/Nook_Shopping). "Recipes" refers to the start or end of certain recipes being available. "Birthday" refers to the birthday of a villager or special character.
 */
export declare enum NHEventTypeEnum {
    Event = "Event",
    NookShopping = "Nook Shopping",
    Recipes = "Recipes",
    Birthday = "Birthday"
}
export declare class NHEvent extends SpeakeasyBase {
    /**
     * The date of the event in YYYY-MM-DD format.
     */
    date?: string;
    /**
     * The description of the event.
     */
    event?: string;
    /**
     * The type of event. "Event" is a festivity the player can take part in. "Nook Shopping" refers to the [seasonal events](https://nookipedia.com/wiki/Nook_Shopping_seasonal_event) in which exclusive item(s) are available via []Nook Shopping](https://nookipedia.com/wiki/Nook_Shopping). "Recipes" refers to the start or end of certain recipes being available. "Birthday" refers to the birthday of a villager or special character.
     */
    type?: NHEventTypeEnum;
    /**
     * Link to the respective Nookipedia article for the event.
     */
    url?: string;
}
