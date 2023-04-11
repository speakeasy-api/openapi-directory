import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteDataQualityJobDefinitionXAmzTargetEnum {
    SageMakerDeleteDataQualityJobDefinition = "SageMaker.DeleteDataQualityJobDefinition"
}
export declare class DeleteDataQualityJobDefinitionRequest extends SpeakeasyBase {
    deleteDataQualityJobDefinitionRequest: shared.DeleteDataQualityJobDefinitionRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteDataQualityJobDefinitionXAmzTargetEnum;
}
export declare class DeleteDataQualityJobDefinitionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * ResourceNotFound
     */
    resourceNotFound?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
