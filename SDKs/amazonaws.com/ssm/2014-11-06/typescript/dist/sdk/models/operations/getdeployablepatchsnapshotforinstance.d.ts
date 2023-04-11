import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetDeployablePatchSnapshotForInstanceXAmzTargetEnum {
    AmazonSSMGetDeployablePatchSnapshotForInstance = "AmazonSSM.GetDeployablePatchSnapshotForInstance"
}
export declare class GetDeployablePatchSnapshotForInstanceRequest extends SpeakeasyBase {
    getDeployablePatchSnapshotForInstanceRequest: shared.GetDeployablePatchSnapshotForInstanceRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetDeployablePatchSnapshotForInstanceXAmzTargetEnum;
}
export declare class GetDeployablePatchSnapshotForInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getDeployablePatchSnapshotForInstanceResult?: shared.GetDeployablePatchSnapshotForInstanceResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedFeatureRequiredException
     */
    unsupportedFeatureRequiredException?: any;
    /**
     * UnsupportedOperatingSystem
     */
    unsupportedOperatingSystem?: any;
}
