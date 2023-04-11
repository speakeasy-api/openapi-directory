import { SpeakeasyBase } from "../../../internal/utils";
import { Tag } from "./tag";
export declare class PurchaseReservedNodesOfferingRequest extends SpeakeasyBase {
    nodeCount?: number;
    reservationId?: string;
    reservedNodesOfferingId: string;
    tags?: Tag[];
}
