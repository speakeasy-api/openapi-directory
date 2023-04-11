import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Contains the list of servers available to the SDK
 */
export declare const ServerList: readonly ["https://api.nookipedia.com/"];
/**
 * The available configuration options for the SDK
 */
export type SDKProps = {
    /**
     * Allows overriding the default axios client used by the SDK
     */
    defaultClient?: AxiosInstance;
    /**
     * Allows overriding the default server URL used by the SDK
     */
    serverURL?: string;
};
/**
 * The Nookipedia API provides endpoints for retrieving *Animal Crossing* data pulled from the [Nookipedia wiki](https://nookipedia.com/wiki/Main_Page). A couple of the key benefits of using the Nookipedia API is access to data spanning the entire *Animal Crossing* series, as well as information that is constantly updated and expanding as editors work on the wiki.<br><br>Access to the Nookipedia API requires obtaining a key. This is so we can manage our scale and provide better support for our users. To request access to the API, please fill out [this form](https://forms.gle/wLwtXLerKhfDrRLY8).<br><br>This API is 'version 2' of our [original API](https://nookipedia.com/api/). While the previous API scraped information directly from the wiki, this new edition of the API pulls data from a structured and constrained database, resulting in higher-quality data, better searching, and support for filtering.
 */
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    private _globals;
    constructor(props?: SDKProps);
    /**
     * All New Horizons artwork
     *
     * @remarks
     * Get a list of all artwork and their details in *Animal Crossing: New Horizons*.
     */
    getNhArt(req: operations.GetNhArtRequest, config?: AxiosRequestConfig): Promise<operations.GetNhArtResponse>;
    /**
     * Single New Horizons artwork
     *
     * @remarks
     * Retrieve information about a specific artwork in *Animal Crossing: New Horizons*.
     */
    getNhArtArtwork(req: operations.GetNhArtArtworkRequest, config?: AxiosRequestConfig): Promise<operations.GetNhArtArtworkResponse>;
    /**
     * All New Horizons bugs
     *
     * @remarks
     * Get a list of all bugs and their details in *Animal Crossing: New Horizons*.
     */
    getNhBugs(req: operations.GetNhBugsRequest, config?: AxiosRequestConfig): Promise<operations.GetNhBugsResponse>;
    /**
     * Single New Horizons bug
     *
     * @remarks
     * Retrieve information about a specific bug in *Animal Crossing: New Horizons*.
     */
    getNhBugsBug(req: operations.GetNhBugsBugRequest, config?: AxiosRequestConfig): Promise<operations.GetNhBugsBugResponse>;
    /**
     * All New Horizons clothing
     *
     * @remarks
     * Get a list of all clothing items and their details in *Animal Crossing: New Horizons*.
     */
    getNhClothing(req: operations.GetNhClothingRequest, config?: AxiosRequestConfig): Promise<operations.GetNhClothingResponse>;
    /**
     * Single New Horizons clothing
     *
     * @remarks
     * Retrieve information about a specific clothing item in *Animal Crossing: New Horizons*.
     */
    getNhClothingClothing(req: operations.GetNhClothingClothingRequest, config?: AxiosRequestConfig): Promise<operations.GetNhClothingClothingResponse>;
    /**
     * All New Horizons events
     *
     * @remarks
     * Get a list of events and dates in *Animal Crossing: New Horizons*, filterable to specific years, months, or days. Data is available for the current and next year.
     */
    getNhEvents(req: operations.GetNhEventsRequest, config?: AxiosRequestConfig): Promise<operations.GetNhEventsResponse>;
    /**
     * All New Horizons fish
     *
     * @remarks
     * Get a list of all fish and their details in *New Horizons*.
     */
    getNhFish(req: operations.GetNhFishRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFishResponse>;
    /**
     * Single New Horizons fish
     *
     * @remarks
     * Retrieve information about a specific fish in *Animal Crossing: New Horizons*.
     */
    getNhFishFish(req: operations.GetNhFishFishRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFishFishResponse>;
    /**
     * All New Horizons fossil groups or individual fossil
     *
     * @remarks
     * Get a list of all the fossil groups with their respective individual fossils in *Animal Crossing: New Horizons*.
     */
    getNhFossilsAll(req: operations.GetNhFossilsAllRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFossilsAllResponse>;
    /**
     * Single New Horizons fossil group with individual fossils
     *
     * @remarks
     * Retrieve information about a specific fossil group with their respective individual fossils in *Animal Crossing: New Horizons*.
     */
    getNhFossilsAllFossil(req: operations.GetNhFossilsAllFossilRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFossilsAllFossilResponse>;
    /**
     * All New Horizons fossil groups
     *
     * @remarks
     * Get a list of all the fossil groups in *Animal Crossing: New Horizons*.
     */
    getNhFossilsGroups(req: operations.GetNhFossilsGroupsRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFossilsGroupsResponse>;
    /**
     * Single New Horizons fossil group
     *
     * @remarks
     * Retrieve information about a specific fossil group in *Animal Crossing: New Horizons*.
     */
    getNhFossilsGroupsFossilGroup(req: operations.GetNhFossilsGroupsFossilGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFossilsGroupsFossilGroupResponse>;
    /**
     * All New Horizons fossils
     *
     * @remarks
     * Get a list of all the individual fossils in *Animal Crossing: New Horizons*.
     */
    getNhFossilsIndividuals(req: operations.GetNhFossilsIndividualsRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFossilsIndividualsResponse>;
    /**
     * Single New Horizons fossil
     *
     * @remarks
     * Retrieve information about a specific individual fossil in *Animal Crossing: New Horizons*.
     */
    getNhFossilsIndividualsFossil(req: operations.GetNhFossilsIndividualsFossilRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFossilsIndividualsFossilResponse>;
    /**
     * All New Horizons furniture
     *
     * @remarks
     * Get a list of all furniture and their details in *Animal Crossing: New Horizons*.
     */
    getNhFurniture(req: operations.GetNhFurnitureRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFurnitureResponse>;
    /**
     * Single New Horizons furniture
     *
     * @remarks
     * Retrieve information about a specific furniture in *Animal Crossing: New Horizons*.
     */
    getNhFurnitureFurniture(req: operations.GetNhFurnitureFurnitureRequest, config?: AxiosRequestConfig): Promise<operations.GetNhFurnitureFurnitureResponse>;
    /**
     * All New Horizons interior items
     *
     * @remarks
     * Get a list of all interior items (flooring, wallpaper, and rugs) and their details in *Animal Crossing: New Horizons*.
     */
    getNhInterior(req: operations.GetNhInteriorRequest, config?: AxiosRequestConfig): Promise<operations.GetNhInteriorResponse>;
    /**
     * Single New Horizons interior item
     *
     * @remarks
     * Retrieve information about a specific interior item in *Animal Crossing: New Horizons*.
     */
    getNhInteriorItem(req: operations.GetNhInteriorItemRequest, config?: AxiosRequestConfig): Promise<operations.GetNhInteriorItemResponse>;
    /**
     * Miscellaneous New Horizons items
     *
     * @remarks
     * Get a list of all miscellaneous items (such as materials, star fragments, fruits, fences, and plants) and their details in *Animal Crossing: New Horizons*.
     */
    getNhItems(req: operations.GetNhItemsRequest, config?: AxiosRequestConfig): Promise<operations.GetNhItemsResponse>;
    /**
     * Single New Horizons miscellaneous item
     *
     * @remarks
     * Retrieve information about a miscellaneous item (such as materials, star fragments, fruits, fences, and plants) in *Animal Crossing: New Horizons*.
     */
    getNhItemsItem(req: operations.GetNhItemsItemRequest, config?: AxiosRequestConfig): Promise<operations.GetNhItemsItemResponse>;
    /**
     * All New Horizons photos and posters
     *
     * @remarks
     * Get a list of all character photos+posters and their details in *Animal Crossing: New Horizons*.
     */
    getNhPhotos(req: operations.GetNhPhotosRequest, config?: AxiosRequestConfig): Promise<operations.GetNhPhotosResponse>;
    /**
     * Single New Horizons photo or poster
     *
     * @remarks
     * Retrieve information about a character photo or poster in *Animal Crossing: New Horizons*.
     */
    getNhPhotosItem(req: operations.GetNhPhotosItemRequest, config?: AxiosRequestConfig): Promise<operations.GetNhPhotosItemResponse>;
    /**
     * All New Horizons recipes
     *
     * @remarks
     * Get a list of all recipes and their details in *Animal Crossing: New Horizons*.
     */
    getNhRecipes(req: operations.GetNhRecipesRequest, config?: AxiosRequestConfig): Promise<operations.GetNhRecipesResponse>;
    /**
     * Single New Horizons recipe
     *
     * @remarks
     * Retrieve information about a specific recipe in *Animal Crossing: New Horizons*.
     */
    getNhRecipesItem(req: operations.GetNhRecipesItemRequest, config?: AxiosRequestConfig): Promise<operations.GetNhRecipesItemResponse>;
    /**
     * All New Horizons sea creatures
     *
     * @remarks
     * Get a list of all sea creatures and their details in *Animal Crossing: New Horizons*.
     */
    getNhSea(req: operations.GetNhSeaRequest, config?: AxiosRequestConfig): Promise<operations.GetNhSeaResponse>;
    /**
     * Single New Horizons sea creature
     *
     * @remarks
     * Retrieve information about a specific sea creature in *Animal Crossing: New Horizons*.
     */
    getNhSeaSeaCreature(req: operations.GetNhSeaSeaCreatureRequest, config?: AxiosRequestConfig): Promise<operations.GetNhSeaSeaCreatureResponse>;
    /**
     * All New Horizons tools
     *
     * @remarks
     * Get a list of all tools and their details in *Animal Crossing: New Horizons*.
     */
    getNhTools(req: operations.GetNhToolsRequest, config?: AxiosRequestConfig): Promise<operations.GetNhToolsResponse>;
    /**
     * Single New Horizons tool
     *
     * @remarks
     * Retrieve information about a specific tool in *Animal Crossing: New Horizons*.
     */
    getNhToolsTool(req: operations.GetNhToolsToolRequest, config?: AxiosRequestConfig): Promise<operations.GetNhToolsToolResponse>;
    /**
     * Villagers
     *
     * @remarks
     * This endpoint retrieves villager information from the entire *Animal Crossing* series, with the option to filter by species, personality, game, and/or birthday. Filters use the AND operator (e.g. asking for villagers who have species `frog` and personality `smug` will return all smug frogs). Note that villagers only include the animals that act as residents. Special characters, such as Tom Nook and Isabelle, are not accessed through this endpoint.
     */
    getVillagers(req: operations.GetVillagersRequest, config?: AxiosRequestConfig): Promise<operations.GetVillagersResponse>;
}
