import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetReturnsSecurity extends SpeakeasyBase {
    fdcAuth: string;
}
export declare class GetReturnsRequest extends SpeakeasyBase {
    /**
     * Date-time in ISO 8601 format for selecting orders after, or at, the specified time
     */
    fromDate: string;
    /**
     * The numbers of items to return
     */
    limit?: number;
    /**
     * A multiplier of the number of items (limit parameter) to skip before returning results
     */
    page?: number;
    /**
     * Date-time in ISO 8601 format for selecting orders before, or at, the specified time
     */
    toDate: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2Order extends SpeakeasyBase {
    id?: number;
    merchantId?: number;
    merchantOrderId?: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2Reason extends SpeakeasyBase {
    id: number;
    title: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item extends SpeakeasyBase {
    id?: number;
    sku?: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason extends SpeakeasyBase {
    id?: number;
    title?: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2RmaItemV2 extends SpeakeasyBase {
    comments?: string;
    id?: number;
    item?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2Item;
    nonRestockedReason?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2NonRestockedReason;
    quantityExpected?: number;
    quantityRestocked?: number;
    quantityReturned?: number;
    quantityShipped?: number;
}
export declare class GetReturnsReturnsArrayV2ReturnV2Status extends SpeakeasyBase {
    id: number;
    title: string;
}
export declare class GetReturnsReturnsArrayV2ReturnV2UserV2 extends SpeakeasyBase {
    id: number;
}
export declare class GetReturnsReturnsArrayV2ReturnV2 extends SpeakeasyBase {
    comments?: string;
    createdAt: Date;
    createdBy: shared.OnereturnsGetResponses200ContentApplication1jsonSchemaPropertiesDataItemsPropertiesUpdatedBy;
    id: number;
    order?: GetReturnsReturnsArrayV2ReturnV2Order;
    reason: GetReturnsReturnsArrayV2ReturnV2Reason;
    returnedBy?: string;
    rmaItems?: GetReturnsReturnsArrayV2ReturnV2RmaItemV2[];
    rmaNumber?: string;
    status: GetReturnsReturnsArrayV2ReturnV2Status;
    updatedAt: Date;
    updatedBy: GetReturnsReturnsArrayV2ReturnV2UserV2;
}
export declare class GetReturnsReturnsArrayV2MetaPaginationV2 extends SpeakeasyBase {
    /**
     * Count of records returned in response, this will be equal to or less then the limit parameter
     */
    count?: number;
    /**
     * Current page of the response, this will match the page parameter
     */
    currentPage?: number;
    /**
     * Total number of records available to request
     */
    total?: number;
    /**
     * Total number of pages available to request
     */
    totalPages?: number;
}
export declare class GetReturnsReturnsArrayV2Meta extends SpeakeasyBase {
    pagination?: GetReturnsReturnsArrayV2MetaPaginationV2;
}
/**
 * Returns
 */
export declare class GetReturnsReturnsArrayV2 extends SpeakeasyBase {
    data?: GetReturnsReturnsArrayV2ReturnV2[];
    meta?: GetReturnsReturnsArrayV2Meta;
}
export declare class GetReturnsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Returns
     */
    returnsArrayV2?: GetReturnsReturnsArrayV2;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
