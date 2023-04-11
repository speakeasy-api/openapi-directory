import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTCreateBlueGreenDeploymentActionEnum {
    CreateBlueGreenDeployment = "CreateBlueGreenDeployment"
}
export declare enum POSTCreateBlueGreenDeploymentVersionEnum {
    TwoThousandAndFourteen1031 = "2014-10-31"
}
export declare class POSTCreateBlueGreenDeploymentRequest extends SpeakeasyBase {
    action: POSTCreateBlueGreenDeploymentActionEnum;
    requestBody?: Uint8Array;
    version: POSTCreateBlueGreenDeploymentVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTCreateBlueGreenDeploymentResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
