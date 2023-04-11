import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateOpsMetadataXAmzTargetEnum {
    AmazonSSMCreateOpsMetadata = "AmazonSSM.CreateOpsMetadata"
}
export declare class CreateOpsMetadataRequest extends SpeakeasyBase {
    createOpsMetadataRequest: shared.CreateOpsMetadataRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateOpsMetadataXAmzTargetEnum;
}
export declare class CreateOpsMetadataResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createOpsMetadataResult?: shared.CreateOpsMetadataResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * OpsMetadataAlreadyExistsException
     */
    opsMetadataAlreadyExistsException?: any;
    /**
     * OpsMetadataInvalidArgumentException
     */
    opsMetadataInvalidArgumentException?: any;
    /**
     * OpsMetadataLimitExceededException
     */
    opsMetadataLimitExceededException?: any;
    /**
     * OpsMetadataTooManyUpdatesException
     */
    opsMetadataTooManyUpdatesException?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
