import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum GetOpsMetadataXAmzTargetEnum {
    AmazonSSMGetOpsMetadata = "AmazonSSM.GetOpsMetadata"
}
export declare class GetOpsMetadataRequest extends SpeakeasyBase {
    getOpsMetadataRequest: shared.GetOpsMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: GetOpsMetadataXAmzTargetEnum;
}
export declare class GetOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    getOpsMetadataResult?: shared.GetOpsMetadataResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * OpsMetadataInvalidArgumentException
     */
    opsMetadataInvalidArgumentException?: any;
    /**
     * OpsMetadataNotFoundException
     */
    opsMetadataNotFoundException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
