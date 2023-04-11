import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Information about the associated IAM roles.
 */
export declare class GetAssociatedEnclaveCertificateIamRolesResultAssociatedRoles extends SpeakeasyBase {
    associatedRoleArn?: string;
    certificateS3BucketName?: string;
    certificateS3ObjectKey?: string;
    encryptionKmsKeyId?: string;
}
/**
 * Success
 */
export declare class GetAssociatedEnclaveCertificateIamRolesResult extends SpeakeasyBase {
    associatedRoles?: GetAssociatedEnclaveCertificateIamRolesResultAssociatedRoles[];
}
