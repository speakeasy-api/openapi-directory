import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum CreateArtifactXAmzTargetEnum {
    SageMakerCreateArtifact = "SageMaker.CreateArtifact"
}
export declare class CreateArtifactRequest extends SpeakeasyBase {
    createArtifactRequest: shared.CreateArtifactRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateArtifactXAmzTargetEnum;
}
export declare class CreateArtifactResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    createArtifactResponse?: shared.CreateArtifactResponse;
    /**
     * ResourceLimitExceeded
     */
    resourceLimitExceeded?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
