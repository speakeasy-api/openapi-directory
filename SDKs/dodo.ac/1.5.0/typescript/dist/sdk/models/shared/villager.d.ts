import { SpeakeasyBase } from "../../../internal/utils";
export declare enum VillagerAppearancesEnum {
    Dnm = "DNM",
    Ac = "AC",
    EPlus = "E_PLUS",
    Ww = "WW",
    Cf = "CF",
    Nl = "NL",
    Wa = "WA",
    Nh = "NH",
    Film = "FILM",
    Hhd = "HHD",
    Pc = "PC"
}
/**
 * The first *Animal Crossing* game the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.
 */
export declare enum VillagerDebutEnum {
    Dnm = "DNM",
    Ac = "AC",
    EPlus = "E_PLUS",
    Ww = "WW",
    Cf = "CF",
    Nl = "NL",
    Wa = "WA",
    Nh = "NH",
    Film = "FILM",
    Hhd = "HHD",
    Pc = "PC"
}
/**
 * Gender of the villager. In *Animal Crossing*, only male and female are used.
 */
export declare enum VillagerGenderEnum {
    Male = "Male",
    Female = "Female"
}
/**
 * The villager's primary hobby, which determines most of the activities they will do around the island (e.g. education villagers will frequently read books and visit the museum). Learn more at https://nookipedia.com/wiki/Hobbies
 */
export declare enum VillagerNhDetailsHobbyEnum {
    Education = "Education",
    Fashion = "Fashion",
    Fitness = "Fitness",
    Music = "Music",
    Nature = "Nature",
    Play = "Play"
}
/**
 * Each personality in *New Horizons* has two sub-personalities, currently referred to as just A and B. The effect of a sub-personality is currently unknown.
 */
export declare enum VillagerNhDetailsSubPersonalityEnum {
    A = "A",
    B = "B"
}
/**
 * An object that holds villager data specific to *New Horizons*. If the villager does not appear in *New Horizons*, this field will be set to null.
 */
export declare class VillagerNhDetails extends SpeakeasyBase {
    /**
     * The default phrase a villager will use when speaking to the player.
     */
    catchphrase?: string;
    /**
     * The default clothing that the villager wears.
     */
    clothing?: string;
    /**
     * The variation of the clothing (usually a color).
     */
    clothingVariation?: string;
    /**
     * The villager's favorite colors (giving the villager a gift with one of their favorite colors increases friendship points).
     */
    favColors?: string[];
    /**
     * The villager's favorite clothing styles.
     */
    favStyles?: string[];
    /**
     * The villager's primary hobby, which determines most of the activities they will do around the island (e.g. education villagers will frequently read books and visit the museum). Learn more at https://nookipedia.com/wiki/Hobbies
     */
    hobby?: VillagerNhDetailsHobbyEnum;
    /**
     * A rendered model of the villager's house exterior. Note that this is not an official Nintendo asset, but a render based of the in-game model.
     */
    houseExteriorUrl?: string;
    /**
     * The flooring in the villager's house.
     */
    houseFlooring?: string;
    /**
     * A screenshot of the villager's house interior.
     */
    houseInteriorUrl?: string;
    /**
     * The music in the villager's house.
     */
    houseMusic?: string;
    /**
     * Any notes about the villager's music. If populated, this is usually "Does not contain a stereo initially", meaning that the villager's house will not play music unless provided with a stereo.
     */
    houseMusicNote?: string;
    /**
     * The wallpaper in the villager's house.
     */
    houseWallpaper?: string;
    /**
     * The villager's icon of their head. See https://nookipedia.com/wiki/Category:New_Horizons_character_icons for full list.
     */
    iconUrl?: string;
    /**
     * Image of the villager from *New Horizons*.
     */
    imageUrl?: string;
    /**
     * The villager's photo, received by the player after attaining a certain friendship level. See https://nookipedia.com/wiki/Category:New_Horizons_pictures for full list.
     */
    photoUrl?: string;
    /**
     * The villager's quote, as found on the back of their in-game photo.
     */
    quote?: string;
    /**
     * Each personality in *New Horizons* has two sub-personalities, currently referred to as just A and B. The effect of a sub-personality is currently unknown.
     */
    subPersonality?: VillagerNhDetailsSubPersonalityEnum;
}
/**
 * The villager's personality. Note that there are no official in-game personality names; these are names that are commonly used by the community. In the case of 'sisterly', other common names include 'big sis' and 'uchi'.
 */
export declare enum VillagerPersonalityEnum {
    Cranky = "Cranky",
    Jock = "Jock",
    Lazy = "Lazy",
    Normal = "Normal",
    Peppy = "Peppy",
    Sisterly = "Sisterly",
    Smug = "Smug",
    Snooty = "Snooty"
}
/**
 * The villager's astrological star sign.
 */
export declare enum VillagerSignEnum {
    Aries = "Aries",
    Taurus = "Taurus",
    Gemini = "Gemini",
    Cancer = "Cancer",
    Leo = "Leo",
    Virgo = "Virgo",
    Libra = "Libra",
    Scorpio = "Scorpio",
    Sagittarius = "Sagittarius",
    Capricorn = "Capricorn",
    Aquarius = "Aquarius",
    Pisces = "Pisces"
}
/**
 * The villager's species.
 */
export declare enum VillagerSpeciesEnum {
    Alligator = "Alligator",
    Anteater = "Anteater",
    Bear = "Bear",
    Bird = "Bird",
    Bull = "Bull",
    Cat = "Cat",
    Cub = "Cub",
    Chicken = "Chicken",
    Cow = "Cow",
    Deer = "Deer",
    Dog = "Dog",
    Duck = "Duck",
    Eagle = "Eagle",
    Elephant = "Elephant",
    Frog = "Frog",
    Goat = "Goat",
    Gorilla = "Gorilla",
    Hamster = "Hamster",
    Hippo = "Hippo",
    Horse = "Horse",
    Koala = "Koala",
    Kangaroo = "Kangaroo",
    Lion = "Lion",
    Monkey = "Monkey",
    Mouse = "Mouse",
    Octopus = "Octopus",
    Ostrich = "Ostrich",
    Penguin = "Penguin",
    Pig = "Pig",
    Rabbit = "Rabbit",
    Rhino = "Rhino",
    Sheep = "Sheep",
    Squirrel = "Squirrel",
    Tiger = "Tiger",
    Wolf = "Wolf"
}
export declare class Villager extends SpeakeasyBase {
    /**
     * A previous name for the villager. A very small number of villagers changed names between earlier games, such as Sally being known as Hazel in the original game.
     */
    altName?: string;
    /**
     * List of official media the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.
     */
    appearances?: VillagerAppearancesEnum[];
    /**
     * Birthday day of the villager. Note that villager birthdays were not introduced until *Wild World*. For villagers who didn't appear in *Wild World* or any later games, this field will be an empty string.
     */
    birthdayDay?: string;
    /**
     * Birthday month of the villager. Note that villager birthdays were not introduced until *Wild World*. For villagers who didn't appear in *Wild World* or any later games, this field will be an empty string.
     */
    birthdayMonth?: string;
    /**
     * The villager's default clothing. This will be the clothing from the latest game (i.e. if the villager had varying phrases between *Wild World* and *New Horizons*, this will be the *New Horizons* clothing).
     */
    clothing?: string;
    /**
     * The first *Animal Crossing* game the villager appeared in. `DNM` is *Doubutsu no Mori* for the Nintendo 64 (Japan-exclusive); `AC` is *Animal Crossing* for GameCube; `E_PLUS` is *Doubutsu no Mori e+* for GameCube (expanded port of AC, Japan-exclusive); `WW` is *Wild World* for the DS; `CF` is *City Folk* for Wii; `NL` is *New Leaf* for 3DS; `WA` is *Welcome amiibo*, the *New Leaf* expansion; `NH` is *New Horizons* for Switch; `FILM` is the *Doubutsu no Mori* Japan-exclusive film; `HHD` is *Happy Home Designer* for the Wii; and `PC` is *Pocket Camp* for mobile.
     */
    debut?: VillagerDebutEnum;
    /**
     * Gender of the villager. In *Animal Crossing*, only male and female are used.
     */
    gender?: VillagerGenderEnum;
    /**
     * The game's internal identifier for the villager. Not all villagers have IDs; villagers who appeared in any game including or after *Wild World* have a consistent ID between games.
     */
    id?: string;
    /**
     * Image of the villager from the latest game the villager appeared in. dodo.ac is Nookipedia's CDN server.
     */
    imageUrl?: string;
    /**
     * Whether the villager was an island in *Animal Crossing* for GameCube. Only a small number of villagers (36) were islanders.
     */
    islander?: boolean;
    /**
     * Name of the villager.
     */
    name?: string;
    /**
     * An object that holds villager data specific to *New Horizons*. If the villager does not appear in *New Horizons*, this field will be set to null.
     */
    nhDetails?: VillagerNhDetails;
    /**
     * The villager's personality. Note that there are no official in-game personality names; these are names that are commonly used by the community. In the case of 'sisterly', other common names include 'big sis' and 'uchi'.
     */
    personality?: VillagerPersonalityEnum;
    /**
     * The villager's default phrase they use throughout conversation. This will be the phrase from the latest game (i.e. if the villager had varying phrases between *Wild World* and *New Horizons*, this will be the *New Horizons* quote).
     */
    phrase?: string;
    /**
     * Any phrases used in previous *Animal Crossing* installations. May be empty.
     */
    prevPhrases?: string[];
    /**
     * The villager's quote as it appears on the back of their in-game portrait item. This will be the quote from the latest game (i.e. if the villager had varying quotes between *Wild World* and *New Horizons*, this will be the *New Horizons* quote). For villagers from older games that do not have a quote, this field will be an empty string.
     */
    quote?: string;
    /**
     * The villager's astrological star sign.
     */
    sign?: VillagerSignEnum;
    /**
     * The villager's species.
     */
    species?: VillagerSpeciesEnum;
    /**
     * The HTML color code of the text of the villager's name badge that appears above their dialogue box when spoken to in-game. Note that to date, only *New Horizons* villagers have this field populated.
     */
    textColor?: string;
    /**
     * The HTML color code of the background of the villager's name badge that appears above their dialogue box when spoken to in-game. Note that to date, only *New Horizons* villagers have this field populated. This field may be useful for styling, such as the accent color for a Discord embed.
     */
    titleColor?: string;
    /**
     * Link to the respective Nookipedia article.
     */
    url?: string;
}
