import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum POSTAssociateIamInstanceProfileActionEnum {
    AssociateIamInstanceProfile = "AssociateIamInstanceProfile"
}
export declare enum POSTAssociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class POSTAssociateIamInstanceProfileRequest extends SpeakeasyBase {
    action: POSTAssociateIamInstanceProfileActionEnum;
    requestBody?: Uint8Array;
    version: POSTAssociateIamInstanceProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class POSTAssociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
