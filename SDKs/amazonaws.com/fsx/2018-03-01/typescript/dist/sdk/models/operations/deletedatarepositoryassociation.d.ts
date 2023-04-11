import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDataRepositoryAssociationXAmzTargetEnum {
    AWSSimbaAPIServiceV20180301DeleteDataRepositoryAssociation = "AWSSimbaAPIService_v20180301.DeleteDataRepositoryAssociation"
}
export declare class DeleteDataRepositoryAssociationRequest extends SpeakeasyBase {
    deleteDataRepositoryAssociationRequest: shared.DeleteDataRepositoryAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataRepositoryAssociationXAmzTargetEnum;
}
export declare class DeleteDataRepositoryAssociationResponse extends SpeakeasyBase {
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
     * Success
     */
    deleteDataRepositoryAssociationResponse?: shared.DeleteDataRepositoryAssociationResponse;
    /**
     * IncompatibleParameterError
     */
    incompatibleParameterError?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * ServiceLimitExceeded
     */
    serviceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
