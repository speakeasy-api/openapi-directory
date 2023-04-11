import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGlobalTableSettingsXAmzTargetEnum {
    DynamoDB20120810UpdateGlobalTableSettings = "DynamoDB_20120810.UpdateGlobalTableSettings"
}
export declare class UpdateGlobalTableSettingsRequest extends SpeakeasyBase {
    updateGlobalTableSettingsInput: shared.UpdateGlobalTableSettingsInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGlobalTableSettingsXAmzTargetEnum;
}
export declare class UpdateGlobalTableSettingsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GlobalTableNotFoundException
     */
    globalTableNotFoundException?: any;
    /**
     * IndexNotFoundException
     */
    indexNotFoundException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * LimitExceededException
     */
    limitExceededException?: any;
    /**
     * ReplicaNotFoundException
     */
    replicaNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceInUseException
     */
    resourceInUseException?: any;
    /**
     * Success
     */
    updateGlobalTableSettingsOutput?: shared.UpdateGlobalTableSettingsOutput;
}
