import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeNotebookInstanceXAmzTargetEnum {
    SageMakerDescribeNotebookInstance = "SageMaker.DescribeNotebookInstance"
}
export declare class DescribeNotebookInstanceRequest extends SpeakeasyBase {
    describeNotebookInstanceInput: shared.DescribeNotebookInstanceInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotebookInstanceXAmzTargetEnum;
}
export declare class DescribeNotebookInstanceResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeNotebookInstanceOutput?: shared.DescribeNotebookInstanceOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
