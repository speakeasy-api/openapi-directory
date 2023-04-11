import { SpeakeasyBase } from "../../../internal/utils";
import { LineItemAssetInformation } from "./lineitemassetinformation";
import { LineItemStatusEnum } from "./lineitemstatusenum";
import { ShipmentInformation } from "./shipmentinformation";
/**
 * Information about a line item.
 */
export declare class LineItem extends SpeakeasyBase {
    assetInformationList?: LineItemAssetInformation[];
    catalogItemId?: string;
    lineItemId?: string;
    previousLineItemId?: string;
    previousOrderId?: string;
    quantity?: number;
    shipmentInformation?: ShipmentInformation;
    status?: LineItemStatusEnum;
}
