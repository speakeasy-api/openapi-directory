import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteProjectXAmzTargetEnum {
    SageMakerDeleteProject = "SageMaker.DeleteProject"
}
export declare class DeleteProjectRequest extends SpeakeasyBase {
    deleteProjectInput: shared.DeleteProjectInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteProjectXAmzTargetEnum;
}
export declare class DeleteProjectResponse extends SpeakeasyBase {
    /**
     * ConflictException
     */
    conflictException?: any;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
