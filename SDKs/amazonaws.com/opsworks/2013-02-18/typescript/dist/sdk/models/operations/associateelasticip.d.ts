import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum AssociateElasticIpXAmzTargetEnum {
    OpsWorks20130218AssociateElasticIp = "OpsWorks_20130218.AssociateElasticIp"
}
export declare class AssociateElasticIpRequest extends SpeakeasyBase {
    associateElasticIpRequest: shared.AssociateElasticIpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: AssociateElasticIpXAmzTargetEnum;
}
export declare class AssociateElasticIpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * ResourceNotFoundException
     */
    resourceNotFoundException?: any;
    /**
     * ValidationException
     */
    validationException?: any;
}
