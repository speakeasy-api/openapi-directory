import { SpeakeasyBase } from "../../../internal/utils";
import { OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy } from "./onereturnsgetresponses200contentapplication1jsonschemapropertiesdataitemspropertiesupdatedby";
export declare class OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2 extends SpeakeasyBase {
    id?: number;
    /**
     * Two character ISO code
     */
    iso2?: string;
    /**
     * Country Name
     */
    name?: string;
}
export declare class OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsignee extends SpeakeasyBase {
    address1: string;
    address2?: string;
    /**
     * City
     */
    addressLocality: string;
    /**
     * Province / State
     */
    addressRegion: string;
    companyName?: string;
    /**
     * Ideally provide the two character ISO code
     */
    country: string;
    email?: string;
    firstName: string;
    id: number;
    iso?: OneordersPostResponses201ContentApplication1jsonSchemaPropertiesOriginalConsigneeIsoCountryV2;
    lastName: string;
    phone?: string;
    /**
     * Postal Code / Zip
     */
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
