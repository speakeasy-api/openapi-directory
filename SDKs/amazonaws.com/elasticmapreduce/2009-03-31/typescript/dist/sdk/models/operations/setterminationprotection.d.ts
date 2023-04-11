import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum SetTerminationProtectionXAmzTargetEnum {
    ElasticMapReduceSetTerminationProtection = "ElasticMapReduce.SetTerminationProtection"
}
export declare class SetTerminationProtectionRequest extends SpeakeasyBase {
    setTerminationProtectionInput: shared.SetTerminationProtectionInput;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: SetTerminationProtectionXAmzTargetEnum;
}
export declare class SetTerminationProtectionResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * InternalServerError
     */
    internalServerError?: any;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
