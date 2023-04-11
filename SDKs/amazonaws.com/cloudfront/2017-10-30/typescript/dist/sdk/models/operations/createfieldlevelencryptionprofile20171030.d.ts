import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex data type of profiles for the field-level encryption.
 */
export declare class CreateFieldLevelEncryptionProfile20171030RequestBodyFieldLevelEncryptionProfileConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
    encryptionEntities?: shared.EncryptionEntities;
    name?: string;
}
export declare class CreateFieldLevelEncryptionProfile20171030RequestBody extends SpeakeasyBase {
    /**
     * A complex data type of profiles for the field-level encryption.
     */
    fieldLevelEncryptionProfileConfig: CreateFieldLevelEncryptionProfile20171030RequestBodyFieldLevelEncryptionProfileConfig;
}
export declare class CreateFieldLevelEncryptionProfile20171030Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFieldLevelEncryptionProfile20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
