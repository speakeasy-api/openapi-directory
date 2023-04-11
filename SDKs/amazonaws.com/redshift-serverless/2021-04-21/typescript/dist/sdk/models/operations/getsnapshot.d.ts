import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetSnapshotXAmzTargetEnum {
    RedshiftServerlessGetSnapshot = "RedshiftServerless.GetSnapshot"
}
export declare class GetSnapshotRequest extends SpeakeasyBase {
    getSnapshotRequest: shared.GetSnapshotRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetSnapshotXAmzTargetEnum;
}
export declare class GetSnapshotResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getSnapshotResponse?: shared.GetSnapshotResponse;
    /**
     * InternalServerException
     */
    internalServerException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
