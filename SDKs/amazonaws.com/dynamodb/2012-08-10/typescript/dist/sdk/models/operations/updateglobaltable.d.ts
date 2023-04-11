import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateGlobalTableXAmzTargetEnum {
    DynamoDB20120810UpdateGlobalTable = "DynamoDB_20120810.UpdateGlobalTable"
}
export declare class UpdateGlobalTableRequest extends SpeakeasyBase {
    updateGlobalTableInput: shared.UpdateGlobalTableInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateGlobalTableXAmzTargetEnum;
}
export declare class UpdateGlobalTableResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * GlobalTableNotFoundException
     */
    globalTableNotFoundException?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ReplicaAlreadyExistsException
     */
    replicaAlreadyExistsException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ReplicaNotFoundException
     */
    replicaNotFoundException?: any;
    /**
     * TableNotFoundException
     */
    tableNotFoundException?: any;
    /**
     * Success
     */
    updateGlobalTableOutput?: shared.UpdateGlobalTableOutput;
}
