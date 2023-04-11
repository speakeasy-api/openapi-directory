import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateAssociationStatusXAmzTargetEnum {
    AmazonSSMUpdateAssociationStatus = "AmazonSSM.UpdateAssociationStatus"
}
export declare class UpdateAssociationStatusRequest extends SpeakeasyBase {
    updateAssociationStatusRequest: shared.UpdateAssociationStatusRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateAssociationStatusXAmzTargetEnum;
}
export declare class UpdateAssociationStatusResponse extends SpeakeasyBase {
    /**
     * AssociationDoesNotExist
     */
    associationDoesNotExist?: any;
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    /**
     * InvalidDocument
     */
    invalidDocument?: any;
    /**
     * InvalidInstanceId
     */
    invalidInstanceId?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * StatusUnchanged
     */
    statusUnchanged?: any;
    /**
     * TooManyUpdates
     */
    tooManyUpdates?: any;
    /**
     * Success
     */
    updateAssociationStatusResult?: shared.UpdateAssociationStatusResult;
}
