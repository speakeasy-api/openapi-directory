import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum {
    SageMakerDescribeNotebookInstanceLifecycleConfig = "SageMaker.DescribeNotebookInstanceLifecycleConfig"
}
export declare class DescribeNotebookInstanceLifecycleConfigRequest extends SpeakeasyBase {
    describeNotebookInstanceLifecycleConfigInput: shared.DescribeNotebookInstanceLifecycleConfigInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DescribeNotebookInstanceLifecycleConfigXAmzTargetEnum;
}
export declare class DescribeNotebookInstanceLifecycleConfigResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    describeNotebookInstanceLifecycleConfigOutput?: shared.DescribeNotebookInstanceLifecycleConfigOutput;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
