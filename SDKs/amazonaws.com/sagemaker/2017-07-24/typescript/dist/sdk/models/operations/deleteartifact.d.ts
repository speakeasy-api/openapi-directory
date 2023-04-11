import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteArtifactXAmzTargetEnum {
    SageMakerDeleteArtifact = "SageMaker.DeleteArtifact"
}
export declare class DeleteArtifactRequest extends SpeakeasyBase {
    deleteArtifactRequest: shared.DeleteArtifactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteArtifactXAmzTargetEnum;
}
export declare class DeleteArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteArtifactResponse?: shared.DeleteArtifactResponse;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
