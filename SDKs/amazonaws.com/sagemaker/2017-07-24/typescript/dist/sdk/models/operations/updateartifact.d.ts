import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum UpdateArtifactXAmzTargetEnum {
    SageMakerUpdateArtifact = "SageMaker.UpdateArtifact"
}
export declare class UpdateArtifactRequest extends SpeakeasyBase {
    updateArtifactRequest: shared.UpdateArtifactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateArtifactXAmzTargetEnum;
}
export declare class UpdateArtifactResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Success
     */
    updateArtifactResponse?: shared.UpdateArtifactResponse;
}
