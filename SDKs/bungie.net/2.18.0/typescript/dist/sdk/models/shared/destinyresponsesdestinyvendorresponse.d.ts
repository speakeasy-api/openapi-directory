import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";
import { DestinyEntitiesVendorsDestinyVendorSaleItemComponent } from "./destinyentitiesvendorsdestinyvendorsaleitemcomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent } from "./dictionarycomponentresponseofint32anddestinyiteminstancecomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemobjectivescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPerksComponent } from "./dictionarycomponentresponseofint32anddestinyitemperkscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent } from "./dictionarycomponentresponseofint32anddestinyitemplugobjectivescomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemRenderComponent } from "./dictionarycomponentresponseofint32anddestinyitemrendercomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent } from "./dictionarycomponentresponseofint32anddestinyitemreusableplugscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent } from "./dictionarycomponentresponseofint32anddestinyitemsocketscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemStatsComponent } from "./dictionarycomponentresponseofint32anddestinyitemstatscomponent";
import { DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent } from "./dictionarycomponentresponseofint32anddestinyitemtalentgridcomponent";
import { DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent } from "./dictionarycomponentresponseofuint32anddestinyitemplugcomponent";
/**
 * Categories that the vendor has available, and references to the sales therein.
 *
 * @remarks
 * COMPONENT TYPE: VendorCategories
 */
export declare class DestinyResponsesDestinyVendorResponseCategories extends SpeakeasyBase {
    /**
     * A vendor can have many categories of items that they sell. This component will return the category information for available items, as well as the index into those items in the user's sale item list.
     *
     * @remarks
     * Note that, since both the category and items are indexes, this data is Content Version dependent. Be sure to check that your content is up to date before using this data. This is an unfortunate, but permanent, limitation of Vendor data.
     */
    data?: DestinyEntitiesVendorsDestinyVendorCategoriesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
 *
 * @remarks
 * COMPONENT TYPE: CurrencyLookups
 */
export declare class DestinyResponsesDestinyVendorResponseCurrencyLookups extends SpeakeasyBase {
    /**
     * This component provides a quick lookup of every item the requested character has and how much of that item they have.
     *
     * @remarks
     * Requesting this component will allow you to circumvent manually putting together the list of which currencies you have for the purpose of testing currency requirements on an item being purchased, or operations that have costs.
     * You *could* figure this out yourself by doing a GetCharacter or GetProfile request and forming your own lookup table, but that is inconvenient enough that this feels like a worthwhile (and optional) redundency. Don't bother requesting it if you have already created your own lookup from prior GetCharacter/GetProfile calls.
     */
    data?: DestinyComponentsInventoryDestinyCurrenciesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * Item components, keyed by the vendorItemIndex of the active sale items.
 *
 * @remarks
 * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
 */
export declare class DestinyResponsesDestinyVendorResponseItemComponents extends SpeakeasyBase {
    instances?: DictionaryComponentResponseOfint32AndDestinyItemInstanceComponent;
    objectives?: DictionaryComponentResponseOfint32AndDestinyItemObjectivesComponent;
    perks?: DictionaryComponentResponseOfint32AndDestinyItemPerksComponent;
    plugObjectives?: DictionaryComponentResponseOfint32AndDestinyItemPlugObjectivesComponent;
    plugStates?: DictionaryComponentResponseOfuint32AndDestinyItemPlugComponent;
    renderData?: DictionaryComponentResponseOfint32AndDestinyItemRenderComponent;
    reusablePlugs?: DictionaryComponentResponseOfint32AndDestinyItemReusablePlugsComponent;
    sockets?: DictionaryComponentResponseOfint32AndDestinyItemSocketsComponent;
    stats?: DictionaryComponentResponseOfint32AndDestinyItemStatsComponent;
    talentGrids?: DictionaryComponentResponseOfint32AndDestinyItemTalentGridComponent;
}
/**
 * Sales, keyed by the vendorItemIndex of the item being sold.
 *
 * @remarks
 * COMPONENT TYPE: VendorSales
 */
export declare class DestinyResponsesDestinyVendorResponseSales extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesVendorsDestinyVendorSaleItemComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A map of string variable values by hash for this character context.
 *
 * @remarks
 * COMPONENT TYPE: StringVariables
 */
export declare class DestinyResponsesDestinyVendorResponseStringVariables extends SpeakeasyBase {
    data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The base properties of the vendor.
 *
 * @remarks
 * COMPONENT TYPE: Vendors
 */
export declare class DestinyResponsesDestinyVendorResponseVendor extends SpeakeasyBase {
    /**
     * This component contains essential/summary information about the vendor.
     */
    data?: DestinyEntitiesVendorsDestinyVendorComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A response containing all of the components for a vendor.
 */
export declare class DestinyResponsesDestinyVendorResponse extends SpeakeasyBase {
    /**
     * Categories that the vendor has available, and references to the sales therein.
     *
     * @remarks
     * COMPONENT TYPE: VendorCategories
     */
    categories?: DestinyResponsesDestinyVendorResponseCategories;
    /**
     * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
     *
     * @remarks
     * COMPONENT TYPE: CurrencyLookups
     */
    currencyLookups?: DestinyResponsesDestinyVendorResponseCurrencyLookups;
    /**
     * Item components, keyed by the vendorItemIndex of the active sale items.
     *
     * @remarks
     * COMPONENT TYPE: [See inside the DestinyItemComponentSet contract for component types.]
     */
    itemComponents?: DestinyResponsesDestinyVendorResponseItemComponents;
    /**
     * Sales, keyed by the vendorItemIndex of the item being sold.
     *
     * @remarks
     * COMPONENT TYPE: VendorSales
     */
    sales?: DestinyResponsesDestinyVendorResponseSales;
    /**
     * A map of string variable values by hash for this character context.
     *
     * @remarks
     * COMPONENT TYPE: StringVariables
     */
    stringVariables?: DestinyResponsesDestinyVendorResponseStringVariables;
    /**
     * The base properties of the vendor.
     *
     * @remarks
     * COMPONENT TYPE: Vendors
     */
    vendor?: DestinyResponsesDestinyVendorResponseVendor;
}
