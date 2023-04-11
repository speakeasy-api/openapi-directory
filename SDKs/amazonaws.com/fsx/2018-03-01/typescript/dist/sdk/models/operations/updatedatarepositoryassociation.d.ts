import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateDataRepositoryAssociationXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301UpdateDataRepositoryAssociation = "AWSSimbaAPIService_v20180301.UpdateDataRepositoryAssociation"
}
export declare class UpdateDataRepositoryAssociationRequest extends SpeakeasyBase {
    updateDataRepositoryAssociationRequest: shared.UpdateDataRepositoryAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateDataRepositoryAssociationXAmzTargetEnum;
}
export declare class UpdateDataRepositoryAssociationResponse extends SpeakeasyBase {
    /**
     * BadRequest
     */
    badRequest?: any;
    contentType: string;
    /**
     * DataRepositoryAssociationNotFound
     */
    dataRepositoryAssociationNotFound?: any;
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
     * Success
     */
    updateDataRepositoryAssociationResponse?: shared.UpdateDataRepositoryAssociationResponse;
}
