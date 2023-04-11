import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateAssociationXAmzTargetEnum {
    AmazonSSMCreateAssociation = "AmazonSSM.CreateAssociation"
}
export declare class CreateAssociationRequest extends SpeakeasyBase {
    createAssociationRequest: shared.CreateAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateAssociationXAmzTargetEnum;
}
export declare class CreateAssociationResponse extends SpeakeasyBase {
    /**
     * AssociationAlreadyExists
     */
    associationAlreadyExists?: any;
    /**
     * AssociationLimitExceeded
     */
    associationLimitExceeded?: any;
    contentType: string;
    /**
     * Success
     */
    createAssociationResult?: shared.CreateAssociationResult;
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
     * InvalidTag
     */
    invalidTag?: any;
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
