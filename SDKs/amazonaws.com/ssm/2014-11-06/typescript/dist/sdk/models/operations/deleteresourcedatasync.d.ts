import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteResourceDataSyncXAmzTargetEnum {
    AmazonSSMDeleteResourceDataSync = "AmazonSSM.DeleteResourceDataSync"
}
export declare class DeleteResourceDataSyncRequest extends SpeakeasyBase {
    deleteResourceDataSyncRequest: shared.DeleteResourceDataSyncRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteResourceDataSyncXAmzTargetEnum;
}
export declare class DeleteResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteResourceDataSyncResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceDataSyncInvalidConfigurationException
     */
    resourceDataSyncInvalidConfigurationException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceDataSyncNotFoundException
     */
    resourceDataSyncNotFoundException?: any;
}
