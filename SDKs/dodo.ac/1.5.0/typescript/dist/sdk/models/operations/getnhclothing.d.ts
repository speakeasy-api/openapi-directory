import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * Specify the category of clothing to return.
 */
export declare enum GetNhClothingCategoryEnum {
    Tops = "Tops",
    Bottoms = "Bottoms",
    DressUp = "Dress-up",
    Headwear = "Headwear",
    Accessories = "Accessories",
    Socks = "Socks",
    Shoes = "Shoes",
    Bags = "Bags",
    Umbrellas = "Umbrellas"
}
export declare enum GetNhClothingColorEnum {
    Aqua = "Aqua",
    Beige = "Beige",
    Black = "Black",
    Blue = "Blue",
    Brown = "Brown",
    Colorful = "Colorful",
    Gray = "Gray",
    Green = "Green",
    Orange = "Orange",
    Pink = "Pink",
    Purple = "Purple",
    Red = "Red",
    White = "White",
    Yellow = "Yellow"
}
/**
 * Return clothing that have the specified Label theme. This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.
 */
export declare enum GetNhClothingLabelthemeEnum {
    Comfy = "Comfy",
    Everyday = "Everyday",
    FairyTale = "Fairy tale",
    Formal = "Formal",
    Goth = "Goth",
    Outdoorsy = "Outdoorsy",
    Party = "Party",
    Sporty = "Sporty",
    Theatrical = "Theatrical",
    Vacation = "Vacation",
    Work = "Work"
}
export declare enum GetNhClothingStyleEnum {
    Active = "Active",
    Cool = "Cool",
    Cute = "Cute",
    Elegant = "Elegant",
    Gorgeous = "Gorgeous",
    Simple = "Simple"
}
export declare class GetNhClothingRequest extends SpeakeasyBase {
    /**
     * The version of the API you are calling, written as `1.0.0`. This is specified as required as good practice, but it is not actually enforced by the API. If you do not specify a version, you will be served the latest version, which may eventually result in breaking changes.
     */
    acceptVersion: string;
    /**
     * Your UUID secret key, granted to you by the Nookipedia team. Required for accessing the API.
     */
    xApiKey: string;
    /**
     * Specify the category of clothing to return.
     */
    category?: GetNhClothingCategoryEnum;
    /**
     * Return clothing that matches the provided colors (may specify one or two colors). Colors are used for gifting villagers.
     */
    color?: GetNhClothingColorEnum[];
    /**
     * When set to `true`, only clothing names are returned. Instead of an array of objects with all details, the return will be an array of strings.
     */
    excludedetails?: string;
    /**
     * Return clothing that have the specified Label theme. This is used for completing the requested outfit theme for [Label](https://nookipedia.com/wiki/Label) when she visits the player's island.
     */
    labeltheme?: GetNhClothingLabelthemeEnum;
    /**
     * Return clothing that matches the provided styles (may specify one or two styles). Styles are used for gifting villagers.
     */
    style?: GetNhClothingStyleEnum[];
}
export declare class GetNhClothingResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Failed to authenticate user from `X-API-KEY`.
     */
    error401?: shared.Error401;
    /**
     * There was an error fetching the requested data.
     */
    error500?: shared.Error500;
    /**
     * A JSON array of clothing.
     */
    nhClothings?: shared.NHClothing[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}
