import { SpeakeasyBase } from "../../../internal/utils";
import { ReservationPurchaseRecommendation } from "./reservationpurchaserecommendation";
import { ReservationPurchaseRecommendationMetadata } from "./reservationpurchaserecommendationmetadata";
/**
 * Success
 */
export declare class GetReservationPurchaseRecommendationResponse extends SpeakeasyBase {
    metadata?: ReservationPurchaseRecommendationMetadata;
    nextPageToken?: string;
    recommendations?: ReservationPurchaseRecommendation[];
}
