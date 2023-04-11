import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateResourceDataSyncXAmzTargetEnum {
    AmazonSSMUpdateResourceDataSync = "AmazonSSM.UpdateResourceDataSync"
}
export declare class UpdateResourceDataSyncRequest extends SpeakeasyBase {
    updateResourceDataSyncRequest: shared.UpdateResourceDataSyncRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateResourceDataSyncXAmzTargetEnum;
}
export declare class UpdateResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceDataSyncConflictException
     */
    resourceDataSyncConflictException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceDataSyncInvalidConfigurationException
     */
    resourceDataSyncInvalidConfigurationException?: any;
    /**
     * ResourceDataSyncNotFoundException
     */
    resourceDataSyncNotFoundException?: any;
    /**
     * Success
     */
    updateResourceDataSyncResult?: Record<string, any>;
}
