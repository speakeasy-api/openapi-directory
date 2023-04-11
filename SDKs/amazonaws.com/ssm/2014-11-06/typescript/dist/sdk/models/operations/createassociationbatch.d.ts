import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAssociationBatchXAmzTargetEnum {
    AmazonSSMCreateAssociationBatch = "AmazonSSM.CreateAssociationBatch"
}
export declare class CreateAssociationBatchRequest extends SpeakeasyBase {
    createAssociationBatchRequest: shared.CreateAssociationBatchRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssociationBatchXAmzTargetEnum;
}
export declare class CreateAssociationBatchResponse extends SpeakeasyBase {
    /**
     * AssociationLimitExceeded
     */
    associationLimitExceeded?: any;
    contentType: string;
    /**
     * Success
     */
    createAssociationBatchResult?: shared.CreateAssociationBatchResult;
    /**
     * DuplicateInstanceId
     */
    duplicateInstanceId?: any;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    /**
     * InvalidOutputLocation
     */
    invalidOutputLocation?: any;
    /**
     * InvalidParameters
     */
    invalidParameters?: any;
    /**
     * InvalidSchedule
     */
    invalidSchedule?: any;
    /**
     * InvalidTarget
     */
    invalidTarget?: any;
    /**
     * InvalidTargetMaps
     */
    invalidTargetMaps?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * UnsupportedPlatformType
     */
    unsupportedPlatformType?: any;
}
