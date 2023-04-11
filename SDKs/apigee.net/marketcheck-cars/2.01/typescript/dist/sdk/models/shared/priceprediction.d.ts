import { SpeakeasyBase } from "../../../internal/utils";
import { PredictedSpecs } from "./predictedspecs";
/**
 * Price range around the predicted price, estimating the error in predicted price
 */
export declare class PricePredictionPriceRange extends SpeakeasyBase {
    /**
     * Lower bound
     */
    lowerBound?: number;
    /**
     * Upper bound
     */
    upperBound?: number;
}
/**
 * Predicted price of a car
 */
export declare class PricePrediction extends SpeakeasyBase {
    /**
     * Actual predicted price of a car
     */
    predictedPrice?: number;
    /**
     * Price range around the predicted price, estimating the error in predicted price
     */
    priceRange?: PricePredictionPriceRange;
    /**
     * Specs of predicted vehicle
     */
    specs?: PredictedSpecs;
}
