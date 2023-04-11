import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateOpsMetadataXAmzTargetEnum {
    AmazonSSMUpdateOpsMetadata = "AmazonSSM.UpdateOpsMetadata"
}
export declare class UpdateOpsMetadataRequest extends SpeakeasyBase {
    updateOpsMetadataRequest: shared.UpdateOpsMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateOpsMetadataXAmzTargetEnum;
}
export declare class UpdateOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * OpsMetadataInvalidArgumentException
     */
    opsMetadataInvalidArgumentException?: any;
    /**
     * OpsMetadataKeyLimitExceededException
     */
    opsMetadataKeyLimitExceededException?: any;
    /**
     * OpsMetadataNotFoundException
     */
    opsMetadataNotFoundException?: any;
    /**
     * OpsMetadataTooManyUpdatesException
     */
    opsMetadataTooManyUpdatesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateOpsMetadataResult?: shared.UpdateOpsMetadataResult;
}
