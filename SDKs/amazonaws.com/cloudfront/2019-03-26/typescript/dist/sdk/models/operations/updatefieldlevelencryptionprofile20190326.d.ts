import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
/**
 * A complex data type of profiles for the field-level encryption.
 */
export declare class UpdateFieldLevelEncryptionProfile20190326RequestBodyFieldLevelEncryptionProfileConfig extends SpeakeasyBase {
    callerReference?: string;
    comment?: string;
    encryptionEntities?: shared.EncryptionEntities;
    name?: string;
}
export declare class UpdateFieldLevelEncryptionProfile20190326RequestBody extends SpeakeasyBase {
    /**
     * A complex data type of profiles for the field-level encryption.
     */
    fieldLevelEncryptionProfileConfig: UpdateFieldLevelEncryptionProfile20190326RequestBodyFieldLevelEncryptionProfileConfig;
}
export declare class UpdateFieldLevelEncryptionProfile20190326Request extends SpeakeasyBase {
    /**
     * The ID of the field-level encryption profile request.
     */
    id: string;
    /**
     * The value of the <code>ETag</code> header that you received when retrieving the profile identity to update. For example: <code>E2QWRUHAPOMQZL</code>.
     */
    ifMatch?: string;
    requestBody: Uint8Array;
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
}
export declare class UpdateFieldLevelEncryptionProfile20190326Response extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
