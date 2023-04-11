import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare enum GETReplaceIamInstanceProfileAssociationActionEnum {
    ReplaceIamInstanceProfileAssociation = "ReplaceIamInstanceProfileAssociation"
}
/**
 * Describes an IAM instance profile.
 */
export declare class GETReplaceIamInstanceProfileAssociationIamInstanceProfile extends SpeakeasyBase {
    arn?: string;
    name?: string;
}
export declare enum GETReplaceIamInstanceProfileAssociationVersionEnum {
    TwoThousandAndSixteen1115 = "2016-11-15"
}
export declare class GETReplaceIamInstanceProfileAssociationRequest extends SpeakeasyBase {
    action: GETReplaceIamInstanceProfileAssociationActionEnum;
    /**
     * The ID of the existing IAM instance profile association.
     */
    associationId: string;
    /**
     * The IAM instance profile.
     */
    iamInstanceProfile: GETReplaceIamInstanceProfileAssociationIamInstanceProfile;
    version: GETReplaceIamInstanceProfileAssociationVersionEnum;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class GETReplaceIamInstanceProfileAssociationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
