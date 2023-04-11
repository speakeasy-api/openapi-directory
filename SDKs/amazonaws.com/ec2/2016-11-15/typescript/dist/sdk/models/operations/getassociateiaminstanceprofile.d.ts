import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETAssociateIamInstanceProfileActionEnum {
    AssociateIamInstanceProfile = "AssociateIamInstanceProfile"
}
/**
 * Describes an IAM instance profile.
 */
export declare class GETAssociateIamInstanceProfileIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    name?: string;
}
export declare enum GETAssociateIamInstanceProfileVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETAssociateIamInstanceProfileRequest extends SpeakeasyBase {
    action: GETAssociateIamInstanceProfileActionEnum;
    /**
     * The IAM instance profile.
     */
    iamInstanceProfile: GETAssociateIamInstanceProfileIamInstanceProfile;
    /**
     * The ID of the instance.
     */
    instanceId: string;
    version: GETAssociateIamInstanceProfileVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETAssociateIamInstanceProfileResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
