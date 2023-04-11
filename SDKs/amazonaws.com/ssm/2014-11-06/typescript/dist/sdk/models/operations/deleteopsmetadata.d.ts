import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteOpsMetadataXAmzTargetEnum {
    AmazonSSMDeleteOpsMetadata = "AmazonSSM.DeleteOpsMetadata"
}
export declare class DeleteOpsMetadataRequest extends SpeakeasyBase {
    deleteOpsMetadataRequest: shared.DeleteOpsMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteOpsMetadataXAmzTargetEnum;
}
export declare class DeleteOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteOpsMetadataResult?: Record<string, any>;
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
