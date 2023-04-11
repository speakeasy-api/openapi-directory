import { SpeakeasyBase } from "../../../internal/utils";
import { DestinyComponentsStringVariablesDestinyStringVariablesComponent } from "./destinycomponentsstringvariablesdestinystringvariablescomponent";
import { DestinyComponentsVendorsDestinyPublicVendorComponent } from "./destinycomponentsvendorsdestinypublicvendorcomponent";
import { DestinyComponentsVendorsDestinyVendorGroupComponent } from "./destinycomponentsvendorsdestinyvendorgroupcomponent";
import { DestinyEntitiesVendorsDestinyVendorCategoriesComponent } from "./destinyentitiesvendorsdestinyvendorcategoriescomponent";
import { DestinyResponsesPublicDestinyVendorSaleItemSetComponent } from "./destinyresponsespublicdestinyvendorsaleitemsetcomponent";
/**
 * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
 *
 * @remarks
 * COMPONENT TYPE: VendorCategories
 */
export declare class DestinyResponsesDestinyPublicVendorsResponseCategories extends SpeakeasyBase {
    data?: Record<string, DestinyEntitiesVendorsDestinyVendorCategoriesComponent>;
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
export declare class DestinyResponsesDestinyPublicVendorsResponseSales extends SpeakeasyBase {
    data?: Record<string, DestinyResponsesPublicDestinyVendorSaleItemSetComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A set of string variable values by hash for a public vendors context.
 *
 * @remarks
 * COMPONENT TYPE: StringVariables
 */
export declare class DestinyResponsesDestinyPublicVendorsResponseStringVariables extends SpeakeasyBase {
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
export declare class DestinyResponsesDestinyPublicVendorsResponseVendorGroups extends SpeakeasyBase {
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
export declare class DestinyResponsesDestinyPublicVendorsResponseVendors extends SpeakeasyBase {
    data?: Record<string, DestinyComponentsVendorsDestinyPublicVendorComponent>;
    /**
     * If true, this component is disabled.
     */
    disabled?: boolean;
    privacy?: number;
}
/**
 * A response containing all valid components for the public Vendors endpoint.
 *
 * @remarks
 *  It is a decisively smaller subset of data compared to what we can get when we know the specific user making the request.
 *  If you want any of the other data - item details, whether or not you can buy it, etc... you'll have to call in the context of a character. I know, sad but true.
 */
export declare class DestinyResponsesDestinyPublicVendorsResponse extends SpeakeasyBase {
    /**
     * Categories that the vendor has available, and references to the sales therein. These are keyed by the Vendor Hash, so you will get one Categories Component per vendor returned.
     *
     * @remarks
     * COMPONENT TYPE: VendorCategories
     */
    categories?: DestinyResponsesDestinyPublicVendorsResponseCategories;
    /**
     * Sales, keyed by the vendorItemIndex of the item being sold. These are keyed by the Vendor Hash, so you will get one Sale Item Set Component per vendor returned.
     *
     * @remarks
     * Note that within the Sale Item Set component, the sales are themselves keyed by the vendorSaleIndex, so you can relate it to the corrent sale item definition within the Vendor's definition.
     * COMPONENT TYPE: VendorSales
     */
    sales?: DestinyResponsesDestinyPublicVendorsResponseSales;
    /**
     * A set of string variable values by hash for a public vendors context.
     *
     * @remarks
     * COMPONENT TYPE: StringVariables
     */
    stringVariables?: DestinyResponsesDestinyPublicVendorsResponseStringVariables;
    /**
     * For Vendors being returned, this will give you the information you need to group them and order them in the same way that the Bungie Companion app performs grouping. It will automatically be returned if you request the Vendors component.
     *
     * @remarks
     * COMPONENT TYPE: Vendors
     */
    vendorGroups?: DestinyResponsesDestinyPublicVendorsResponseVendorGroups;
    /**
     * The base properties of the vendor. These are keyed by the Vendor Hash, so you will get one Vendor Component per vendor returned.
     *
     * @remarks
     * COMPONENT TYPE: Vendors
     */
    vendors?: DestinyResponsesDestinyPublicVendorsResponseVendors;
}
