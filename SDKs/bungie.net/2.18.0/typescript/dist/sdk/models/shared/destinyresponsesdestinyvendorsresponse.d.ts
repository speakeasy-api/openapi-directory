import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsInventoryDestinyCurrenciesComponent } from "./destinycomponentsinventorydestinycurrenciescomponent";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyEntitiesVendorsDestinyVendorComponent } from "./destinyentitiesvendorsdestinyvendorcomponent";
import { DestinyItemComponentSetOfint32 } from "./destinyitemcomponentsetofint32";
import { DestinyResponsesPersonalDestinyVendorSaleItemSetComponent } from "./destinyresponsespersonaldestinyvendorsaleitemsetcomponent";
/**
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 *
 * @remarks
 * COMPONENT TYPE: VendorCategories
 */
export declare class DestinyResponsesDestinyVendorsResponseCategories extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesVendorsDestinyVendorCategoriesComponent>;
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
export declare class DestinyResponsesDestinyVendorsResponseCurrencyLookups extends SpeakeasyBase {
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
 * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
 *
 * @remarks
 * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
 * COMPONENT TYPE: VendorSales
 */
export declare class DestinyResponsesDestinyVendorsResponseSales extends SpeakeasyBase {
    data?: Record<string, DestinyResponsesPersonalDestinyVendorSaleItemSetComponent>;
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
export declare class DestinyResponsesDestinyVendorsResponseStringVariables extends SpeakeasyBase {
    data?: DestinyComponentsStringVariablesDestinyStringVariablesComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
 *
 * @remarks
 * COMPONENT TYPE: Vendors
 */
export declare class DestinyResponsesDestinyVendorsResponseVendorGroups extends SpeakeasyBase {
    /**
     * This component returns references to all of the Vendors in the response, grouped by categorizations that Bungie has deemed to be interesting, in the order in which both the groups and the vendors within that group should be rendered.
     */
    data?: DestinyComponentsVendorsDestinyVendorGroupComponent;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
 *
 * @remarks
 * COMPONENT TYPE: Vendors
 */
export declare class DestinyResponsesDestinyVendorsResponseVendors extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesVendorsDestinyVendorComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A response containing all of the components for all requested vendors.
 */
export declare class DestinyResponsesDestinyVendorsResponse extends SpeakeasyBase {
    /**
     * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
     *
     * @remarks
     * COMPONENT TYPE: VendorCategories
     */
    categories?: DestinyResponsesDestinyVendorsResponseCategories;
    /**
     * A "lookup" convenience component that can be used to quickly check if the character has access to items that can be used for purchasing.
     *
     * @remarks
     * COMPONENT TYPE: CurrencyLookups
     */
    currencyLookups?: DestinyResponsesDestinyVendorsResponseCurrencyLookups;
    /**
     * The set of item detail components, one set of item components per Vendor. These are keyed by the Vendor Hash, so you will get one Item Component Set per vendor returned.
     *
     * @remarks
     * The components contained inside are themselves keyed by the vendorSaleIndex, and will have whatever item-level components you requested (Sockets, Stats, Instance data etc...) per item being sold by the vendor.
     */
    itemComponents?: Record<string, DestinyItemComponentSetOfint32>;
    /**
     * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
     *
     * @remarks
     * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
     * COMPONENT TYPE: VendorSales
     */
    sales?: DestinyResponsesDestinyVendorsResponseSales;
    /**
     * A map of string variable values by hash for this character context.
     *
     * @remarks
     * COMPONENT TYPE: StringVariables
     */
    stringVariables?: DestinyResponsesDestinyVendorsResponseStringVariables;
    /**
     * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
     *
     * @remarks
     * COMPONENT TYPE: Vendors
     */
    vendorGroups?: DestinyResponsesDestinyVendorsResponseVendorGroups;
    /**
     * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
     *
     * @remarks
     * COMPONENT TYPE: Vendors
     */
    vendors?: DestinyResponsesDestinyVendorsResponseVendors;
}
