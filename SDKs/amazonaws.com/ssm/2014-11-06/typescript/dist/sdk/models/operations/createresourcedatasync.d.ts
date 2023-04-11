import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateResourceDataSyncXAmzTargetEnum {
    AmazonSSMCreateResourceDataSync = "AmazonSSM.CreateResourceDataSync"
}
export declare class CreateResourceDataSyncRequest extends SpeakeasyBase {
    createResourceDataSyncRequest: shared.CreateResourceDataSyncRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateResourceDataSyncXAmzTargetEnum;
}
export declare class CreateResourceDataSyncResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createResourceDataSyncResult?: Record<string, any>;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ResourceDataSyncAlreadyExistsException
     */
    resourceDataSyncAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceDataSyncCountExceededException
     */
    resourceDataSyncCountExceededException?: any;
    /**
     * ResourceDataSyncInvalidConfigurationException
     */
    resourceDataSyncInvalidConfigurationException?: any;
}
