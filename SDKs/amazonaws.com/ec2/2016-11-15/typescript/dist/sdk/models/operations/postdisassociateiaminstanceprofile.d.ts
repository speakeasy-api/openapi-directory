import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTDisassociateIamInstanceProfileActionEnum {
    DisassociateIamInstanceProfile = "DisassociateIamInstanceProfile"
}
export declare enum POSTDisassociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTDisassociateIamInstanceProfileRequest extends SpeakeasyBase {
    action: POSTDisassociateIamInstanceProfileActionEnum;
    requestBody?: Uint8Array;
    version: POSTDisassociateIamInstanceProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTDisassociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
