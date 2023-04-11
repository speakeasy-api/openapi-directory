import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAssociationXAmzTargetEnum {
    AmazonSSMUpdateAssociation = "AmazonSSM.UpdateAssociation"
}
export declare class UpdateAssociationRequest extends SpeakeasyBase {
    updateAssociationRequest: shared.UpdateAssociationRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAssociationXAmzTargetEnum;
}
export declare class UpdateAssociationResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    /**
     * AssociationVersionLimitExceeded
     */
    associationVersionLimitExceeded?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidAssociationVersion
     */
    invalidAssociationVersion?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidDocumentVersion
     */
    invalidDocumentVersion?: any;
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
    /**
     * InvalidUpdate
     */
    invalidUpdate?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
    /**
     * Success
     */
    updateAssociationResult?: shared.UpdateAssociationResult;
}
