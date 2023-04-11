import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ShipmentGetListRequest extends SpeakeasyBase {
    /**
     * Specifies the newest shipment date to include in the response
     */
    createdAtMax?: Date;
    /**
     * Specifies the oldest shipment date to include in the response
     */
    createdAtMin?: Date;
    /**
     * Get Shipments with a shipment greater or equal than this id. New shipments have a greater id than older shipments.
     */
    minimumShipmentId?: number;
    /**
     * Get shipments for this order only.
     */
    orderId?: number;
    /**
     * Specifies the page to request.
     */
    page?: number;
    /**
     * Specifies the pagesize. Defaults to 50, max value is 250
     */
    pageSize?: number;
    /**
     * Get Shippings for the specified shipping provider only. <seealso cref="M:Rechnungsdruck.WebApp.Controllers.Api.ShipmentController.GetShippingproviders" />
     */
    shippingProviderId?: number;
}
export declare class ShipmentGetListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * OK
     */
    rechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment?: shared.RechnungsdruckWebAppControllersAPIAPIPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelShipment;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
