import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DeleteParametersXAmzTargetEnum {
    AmazonSSMDeleteParameters = "AmazonSSM.DeleteParameters"
}
export declare class DeleteParametersRequest extends SpeakeasyBase {
    deleteParametersRequest: shared.DeleteParametersRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteParametersXAmzTargetEnum;
}
export declare class DeleteParametersResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteParametersResult?: shared.DeleteParametersResult;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
