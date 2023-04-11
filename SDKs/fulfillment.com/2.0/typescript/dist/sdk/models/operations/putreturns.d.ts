import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutReturnsSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class PutReturnsRmaRequestV2Items extends SpeakeasyBase {
    quantityExpected: number;
    sku: string;
}
/**
 * RMA
 */
export declare class PutReturnsRmaRequestV2 extends SpeakeasyBase {
    items: PutReturnsRmaRequestV2Items[];
    merchantOrderId?: string;
    recipient: shared.OneordersPostRequestBodyContentApplication1jsonSchemaPropertiesRecipient;
    rmaNumber: string;
}
export declare class PutReturnsRmaResponseV2Items extends SpeakeasyBase {
    quantityExpected: number;
    sku: string;
}
export declare class PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2 extends SpeakeasyBase {
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
export declare class PutReturnsRmaResponseV2ConsigneeV2 extends SpeakeasyBase {
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
    iso?: PutReturnsRmaResponseV2ConsigneeV2IsoCountryV2;
    lastName: string;
    phone?: string;
    /**
     * Postal Code / Zip
     */
    postalCode: string;
    updatedAt?: Date;
    updatedBy?: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
}
/**
 * RMA Created
 */
export declare class PutReturnsRmaResponseV2 extends SpeakeasyBase {
    items: PutReturnsRmaResponseV2Items[];
    merchantOrderId?: string;
    recipient: PutReturnsRmaResponseV2ConsigneeV2;
    rmaNumber: string;
}
export declare class PutReturnsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * RMA Created
     */
    rmaResponseV2?: PutReturnsRmaResponseV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * A Component of Your Request Was Not Found
     */
    oneordersGetResponses404ContentApplication1jsonSchema?: shared.OneordersGetResponses404ContentApplication1jsonSchema;
    /**
     * RMA Updated
     */
    onereturnsPutResponses201ContentApplication1jsonSchema?: shared.OnereturnsPutResponses201ContentApplication1jsonSchema;
}
