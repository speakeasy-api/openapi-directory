import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PutOrdersIdShipSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
/**
 * Shipping Details
 */
export declare class PutOrdersIdShipOrderShipV2 extends SpeakeasyBase {
    /**
     * Tracking number of package
     */
    trackingNumber: string;
    /**
     * Override predicted weight of package
     */
    weightOverride?: number;
}
export declare class PutOrdersIdShipRequest extends SpeakeasyBase {
    /**
     * Shipping Details
     */
    requestBody: PutOrdersIdShipOrderShipV2;
    /**
     * The FDC order Id
     */
    id: number;
}
export declare class PutOrdersIdShipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Order Found
     */
    oneordersPostResponses201ContentApplication1jsonSchema?: shared.OneordersPostResponses201ContentApplication1jsonSchema;
}
