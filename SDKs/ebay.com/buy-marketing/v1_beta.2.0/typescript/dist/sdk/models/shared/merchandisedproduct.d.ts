import { SpeakeasyBase } from "../../../internal/utils";
import { Image } from "./image";
import { MarketPriceDetail } from "./marketpricedetail";
import { RatingAspect } from "./ratingaspect";
/**
 * The type that defines the fields for product information, including price, condition, ratings, etc.
 */
export declare class MerchandisedProduct extends SpeakeasyBase {
    /**
     * The average rating for the product based on eBay user ratings.
     */
    averageRating?: string;
    /**
     * The eBay product identifier of a product from the eBay product catalog. You can use this value in the Browse API <b>search</b> method to retrieve items for this product.
     */
    epid?: string;
    /**
     * Type the defines the details of an image, such as size and URL. Currently only <b> imageUrl</b> is getting populated. The <b> height</b> and <b> width</b> were added for future use.
     */
    image?: Image;
    /**
     * An array of containers for the product market price details, such as condition and market price.
     */
    marketPriceDetails?: MarketPriceDetail[];
    /**
     * An array of containers for ratings of the product aspects, such as "Is it a good value".
     */
    ratingAspects?: RatingAspect[];
    /**
     * The total number of eBay users that rated the product.
     */
    ratingCount?: number;
    /**
     * The total number of eBay users that wrote a review for the product.
     */
    reviewCount?: number;
    /**
     * The title of the product.
     */
    title?: string;
}
