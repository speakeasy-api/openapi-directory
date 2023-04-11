import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DisassociateElasticIpXAmzTargetEnum {
    OpsWorks20130218DisassociateElasticIp = "OpsWorks_20130218.DisassociateElasticIp"
}
export declare class DisassociateElasticIpRequest extends SpeakeasyBase {
    disassociateElasticIpRequest: shared.DisassociateElasticIpRequest;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DisassociateElasticIpXAmzTargetEnum;
}
export declare class DisassociateElasticIpResponse extends SpeakeasyBase {
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
