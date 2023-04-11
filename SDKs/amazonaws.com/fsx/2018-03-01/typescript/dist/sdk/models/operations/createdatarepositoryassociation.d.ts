import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateDataRepositoryAssociationXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301CreateDataRepositoryAssociation = "AWSSimbaAPIService_v20180301.CreateDataRepositoryAssociation"
}
export declare class CreateDataRepositoryAssociationRequest extends SpeakeasyBase {
    createDataRepositoryAssociationRequest: shared.CreateDataRepositoryAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateDataRepositoryAssociationXAmzTargetEnum;
}
export declare class CreateDataRepositoryAssociationResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * Success
     */
    createDataRepositoryAssociationResponse?: shared.CreateDataRepositoryAssociationResponse;
    /**
     * FileSystemNotFound
     */
    fileSystemNotFound?: any;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    /**
     * UnsupportedOperation
     */
    unsupportedOperation?: any;
}
