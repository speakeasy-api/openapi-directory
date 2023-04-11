import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.
 */
export declare enum UpdateGeofenceCollectionRequestBodyPricingPlanEnum {
    RequestBasedUsage = "RequestBasedUsage",
    MobileAssetTracking = "MobileAssetTracking",
    MobileAssetManagement = "MobileAssetManagement"
}
export declare class UpdateGeofenceCollectionRequestBody extends SpeakeasyBase {
    /**
     * Updates the description for the geofence collection.
     */
    description?: string;
    /**
     * No longer used. If included, the only allowed value is <code>RequestBasedUsage</code>.
     */
    pricingPlan?: UpdateGeofenceCollectionRequestBodyPricingPlanEnum;
    /**
     * This parameter is no longer used.
     */
    pricingPlanDataSource?: string;
}
export declare class UpdateGeofenceCollectionRequest extends SpeakeasyBase {
    /**
     * The name of the geofence collection to update.
     */
    collectionName: string;
    requestBody: UpdateGeofenceCollectionRequestBody;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateGeofenceCollectionResponse extends SpeakeasyBase {
    /**
     * AccessDeniedException
     */
    accessDeniedException?: any;
    contentType: string;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ThrottlingException
     */
    throttlingException?: any;
    /**
     * Success
     */
    updateGeofenceCollectionResponse?: shared.UpdateGeofenceCollectionResponse;
    /**
     * ValidationException
     */
    validationException?: any;
}
