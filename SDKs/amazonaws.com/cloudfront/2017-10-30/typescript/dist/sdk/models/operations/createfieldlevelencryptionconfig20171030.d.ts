import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex data type that includes the profile configurations specified for field-level encryption.
 */
export declare class CreateFieldLevelEncryptionConfig20171030RequestBodyFieldLevelEncryptionConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
    contentTypeProfileConfig?: shared.ContentTypeProfileConfig;
    queryArgProfileConfig?: shared.QueryArgProfileConfig;
}
export declare class CreateFieldLevelEncryptionConfig20171030RequestBody extends SpeakeasyBase {
    /**
     * A complex data type that includes the profile configurations specified for field-level encryption.
     */
    fieldLevelEncryptionConfig: CreateFieldLevelEncryptionConfig20171030RequestBodyFieldLevelEncryptionConfig;
}
export declare class CreateFieldLevelEncryptionConfig20171030Request extends SpeakeasyBase {
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class CreateFieldLevelEncryptionConfig20171030Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
