import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Success
 */
export declare class CreateSiteResponse extends SpeakeasyBase {
    /**
     * Site ARN.
     */
    arn: string;
    /**
     * Timestamp at which the resource was created.
     */
    createdAt: Date;
    /**
     * Filters access by the site's identifier
     */
    id: string;
    /**
     * Timestamp at which the resource was last updated.
     */
    updatedAt: Date;
}
