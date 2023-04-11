import { SpeakeasyBase } from "../../../internal/utils";
import { Feature } from "./feature";
import { FeaturedOAuthClient } from "./featuredoauthclient";
/**
 * ProductPackageResponse
 */
export declare class ProductPackageResponse extends SpeakeasyBase {
    /**
     * OAuth Client Information
     */
    clients: FeaturedOAuthClient[];
    /**
     * Features
     */
    features: Feature[];
    /**
     * ID
     */
    productPackageId: number;
    /**
     * Name
     */
    productPackageName: string;
}
